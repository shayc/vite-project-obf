import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { Board, Button } from "./components/Board";
import { getRootBoard, importOBZFile } from "./db/boards-db";
import * as OBF from "./open-board-format/obf";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [board, setBoard] = useState<OBF.Board | null>(null);

  useEffect(() => {
    void getRootBoard().then((board) => {
      setBoard(board);
      console.log("Root board:", board);
    });
  }, []);

  async function fetchPosts() {
    console.log("fetch posts");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = (await response.json()) as Post[];

    setPosts(posts);
  }

  return (
    <div className={classes.app}>
      <h1>App</h1>
      <input
        type="file"
        onChange={(e) => {
          importOBZFile(e.target.files![0])
            .then(() =>
              getRootBoard().then((board) => {
                setBoard(board);
                console.log("Root board:", board);
              }),
            )
            .catch(console.error);
        }}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <Button
        onClick={() => {
          void fetchPosts();
        }}
      >
        Fetch Posts
      </Button>

      <Board {...board} />
    </div>
  );
}

export default App;

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
