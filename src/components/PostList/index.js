import React, { useState } from 'react';
import {Post} from "../Post";

const URL = 'https://600d9cedf979dd001745ce20.mockapi.io';

export class PostsDataFetcher extends React.Component {
    state = {
        posts: [],
    };

    constructor(props) {
        super(props);

        this.abortController = null;
    }
    componentDidMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
            this.abortController = null;
        }
    }

    render() {
        return (
            <PostList
                posts={this.state.posts}
                onAddPost={post => this.addPost(post)}
                onEditPost={post => this.editPost(post)}
                onRemovePost={postId => this.removePost(postId)}
            />
        );
    }

    async fetchData() {
        const response = await fetch(URL + '/posts', {
            signal: this.getAbortSignal(),
        });
        const data = await response.json();

        this.setState({
            posts: data,
        });
    }

    async addPost({ title, text }) {
        await fetch(URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, text }),
            signal: this.getAbortSignal(),
        });

        await this.fetchData();
    }

    async editPost({ id, title, text }) {
        await fetch(URL + '/posts/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, text }),
            signal: this.getAbortSignal(),
        });

        await this.fetchData();
    }

    async removePost(postId) {
        await fetch(URL + '/posts/' + postId, {
            method: 'DELETE',
            signal: this.getAbortSignal(),
        });

        await this.fetchData();
    }

    getAbortSignal() {
        this.abortController = new AbortController();

        return this.abortController.signal;
    }
}

function PostList({ posts, onAddPost, onEditPost, onRemovePost }) {
    const [isFormOpen, setFormState] = useState(false);
    const [editPostId, setEditPostId] = useState(null);

    return (
        <div>
            {!isFormOpen && <button onClick={() => setFormState(true)}>Add post</button>}
            {isFormOpen && <PostForm
                onSend={post => {
                    onAddPost(post);
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
                                onEditPost({
                                    id: post.id,
                                    ...postData,
                                });

                                setEditPostId(null);
                            }} />
                        : <Post post={post} />
                    }
                    <button onClick={() => setEditPostId(post.id)}>Edit</button>
                    <button onClick={() => onRemovePost(post.id)}>X</button>
                </div>
            ))}
        </div>
    )
}

function PostForm({ onSend, onCancel, title = '', text = '' }) {
    const [stateTitle, setTitle] = useState(title);
    const [stateText, setText] = useState(text);

    return (
        <div>
            <input value={stateTitle} onChange={e => setTitle(e.target.value)} placeholder="Post title" />
            <textarea value={stateText} onChange={e => setText(e.target.value)} placeholder="Post text" />
            <button onClick={() => onSend({ title: stateTitle, text: stateText })}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}
