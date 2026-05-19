import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>Artigo {id}</h1>
      <p>Conteúdo do artigo.</p>
    </div>
  );
}

export default Post;