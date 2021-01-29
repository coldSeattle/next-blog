import { wrapper } from '../core/store/store'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0;
  background: #282c35;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

ul {
  padding: 0;
  margin: 0;
}

button {
  cursor: pointer;
}

a {
  font-size: 2rem;
  color: inherit;
  cursor: pointer;
  font-family: sans-serif;
  text-decoration: none;
}

* {
  font-family: 'Roboto';
  box-sizing: border-box;
  outline: none;

}
`

const WrappedApp = ({ Component, pageProps }) => {
  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default wrapper.withRedux(WrappedApp)
