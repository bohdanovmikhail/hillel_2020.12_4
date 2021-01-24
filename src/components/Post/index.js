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
