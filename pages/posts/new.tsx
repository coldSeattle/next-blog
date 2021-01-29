import { useState } from "react"
import { connect, useDispatch } from "react-redux"
import { CreateNewPostNav, Navigation, PostsContainer, Title } from ".."
import styled from 'styled-components'
import Link from "next/link"
import { addNewPostAsync } from "../../core/actions/postsActions"

const NewPostAddPage = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    return (
        <PostsContainer>
            <Title>
                Create new Post
            </Title>
            <div
                style={{ margin: '3rem 3rem 3rem 0' }}>
                <TitleInput
                    placeholder={'title'}
                    name="title"
                    id="title"
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                />
                <BodyInput
                    rows={8}
                    name="body"
                    value={body}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)}
                />
                <Link href={'/'}>
                    <CreateNewPostNav
                        onClick={() => {
                            if (!title || !body) return;
                            dispatch(addNewPostAsync({ title: title, body: body }))
                        }}
                    >
                        create Post
                </CreateNewPostNav>
                </Link>
            </div>
            <Link href={'/'}>
                <Navigation>back</Navigation>
            </Link>
        </PostsContainer>
    )
}

export default connect((state) => state)(NewPostAddPage)


export const formContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start
`

export const TitleInput = styled.input`
&::placeholder {
    color: #fff;
}
width: 200px;
height: 30px;
border-radius: 3px;
background: transparent;
border-color: #fff;
color: #fff;
margin-bottom: 1rem;
`

export const BodyInput = styled.textarea`
&::placeholder {
    color: #fff;
}
width: 100%;
height: auto;
border-radius: 3px;
background: transparent;
border-color: #fff;
color: #fff;
margin-bottom: 1rem;
`

// export const CreateNewPostBtn = styled.a`
// width: 200px;
// height: 30px;
// border-radius: 3px;
// background: transparent;
// border-color: #fff;
// color: #fff;
// margin-bottom: 1rem;
// `