import Image from "next/image";
import styles from "./page.module.css";
import TodoList from "./components/TodoList";
import CreateToDo from "./components/createTodo";

export default function Home() {
  return (
    <>
      <div className="container">
        <TodoList />
        <CreateToDo />
      </div>
    </>
  );
}
