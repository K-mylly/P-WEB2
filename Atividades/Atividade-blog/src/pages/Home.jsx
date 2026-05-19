import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <main>
      <h1>Meu Blog</h1>

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}

export default Home;