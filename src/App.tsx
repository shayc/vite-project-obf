import { Board } from "./features/Board";
import { Layout } from "./components/Layout/Layout.tsx";
import { useBoardsDB } from "./db/use-boards-db.tsx";

export function App() {
  const { board } = useBoardsDB();

  return (
    <Layout>
      <Board board={board} />
    </Layout>
  );
}
