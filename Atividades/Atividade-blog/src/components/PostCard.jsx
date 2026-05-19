import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>

      <p>{post.body}</p>

      <Link to={`/post/${post.id}`}>
        Ler mais
      </Link>
    </div>
  );
}

export default PostCard;