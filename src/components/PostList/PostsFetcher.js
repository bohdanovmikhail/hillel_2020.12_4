import React from 'react';

function getUrlFromToken(tokenID, suffix) {
    return `https://${tokenID}.mockapi.io/${suffix}`;
}

export function getPostList(tokenID) {
    return WrapComponent => {
        class PostListFetcher extends React.Component {
            state = {
                posts: [],
            };

            componentDidMount() {
                this.fetchData();
            }

            render() {
                return (
                    <WrapComponent
                        posts={this.state.posts}
                        fetchPosts={() => this.fetchData()}
                        {...this.props}
                    />
                );
            }

            async fetchData() {
                const url = getUrlFromToken(tokenID, 'posts');

                const response = await fetch(url);
                const data = await response.json();

                this.setState({
                    posts: data,
                });
            }
        }

        return PostListFetcher;
    };
}

export function changePost(tokenID) {
    return WrapComponent => {
        class PostUpdated extends React.Component {
            constructor(props) {
                super(props);

                this.addPost = this.addPost.bind(this);
                this.editPost = this.editPost.bind(this);
                this.removePost = this.removePost.bind(this);
            }

            render() {
                return (
                    <WrapComponent
                        onPostInsert={this.addPost}
                        onPostUpdate={this.editPost}
                        onPostDelete={this.removePost}
                        {...this.props}
                    />
                );
            }

            async addPost({ title, text }) {
                const url = getUrlFromToken(tokenID, 'posts');

                await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, text }),
                });

                await this.props.fetchPosts();
            }

            async editPost({ id, title, text }) {
                const url = getUrlFromToken(tokenID, 'posts/' + id);

                await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title, text }),
                });

                await this.props.fetchPosts();
            }

            async removePost(postId) {
                const url = getUrlFromToken(tokenID, 'posts/' + postId);

                await fetch(url, {
                    method: 'DELETE',
                });

                await this.props.fetchPosts();
            }
        }

        return PostUpdated;
    };
}
