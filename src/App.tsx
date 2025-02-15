import { AppLayout } from "./components/AppLayout/AppLayout.tsx";
import { useBoardsDB } from "./db/use-boards-db.tsx";
import { Board } from "./features/board/index.ts";

export function App() {
  const { board } = useBoardsDB();

  return (
    <AppLayout>
      <Board board={board} />
    </AppLayout>
  );
}
