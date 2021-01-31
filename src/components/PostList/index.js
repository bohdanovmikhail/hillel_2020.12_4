import { PostList as PostListComponent } from './PostList';
import { getPostList, changePost } from './PostsFetcher';

const TOKEN_ID = '600d9cedf979dd001745ce20';

let PostList = PostListComponent;
PostList = changePost(TOKEN_ID)(PostList);
PostList = getPostList(TOKEN_ID)(PostList);

export { PostList };
export const PostsCounter = getPostList(TOKEN_ID)(_PostsCounter);



function _PostsCounter({ posts }) {
    return (
        <div>
            Post count: {posts.length}
        </div>
    );
}
