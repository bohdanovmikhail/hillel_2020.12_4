import { useState } from 'react';

import { PostForm } from './PostForm';

export function PostList({
    posts,
    onPostInsert,
    onPostUpdate,
    onPostDelete,
    fetchPosts,
}) {
    const [isFormOpen, setFormState] = useState(false);
    const [editPostId, setEditPostId] = useState(null);

    return (
        <div>
            {!isFormOpen && <button onClick={() => setFormState(true)}>Add post</button>}
            {isFormOpen && <PostForm
                onSend={post => {
                    onPostInsert(post);
                    setFormState(false);
                }}
                onCancel={() => setFormState(false)}
            />}

            {posts.map((post, index) => (
                <div key={index}>
                    {editPostId === post.id
                        ? <PostForm
                            title={post.title}
                            text={post.text}
                            onCancel={() => setEditPostId(null)}
                            onSend={postData => {
                                onPostUpdate({
                                    id: post.id,
                                    ...postData,
                                });

                                setEditPostId(null);
                            }} />
                        : <Post post={post} />
                    }
                    <button onClick={() => setEditPostId(post.id)}>Edit</button>
                    <button onClick={() => {
                        onPostDelete(post.id);
                    }}>X</button>
                </div>
            ))}
        </div>
    )
}

export function Post(props) {
    return (
        <div>
            <h2>{props.post.title}</h2>
            <h4>{props.post.createdAt}</h4>
            <div>
                {props.post.text}
            </div>
        </div>
    );
}
