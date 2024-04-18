import { useSelector } from "react-redux";
import Form from "../Form";
import TodoItem from "../TodoItem";
import TodoTitle from "../TodoTitle";
function TodoApp() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="w-[432px] mx-auto mt-48">
      <Form></Form>
      <TodoTitle title="Tasks to do" status={false} count={4}></TodoTitle>
      {todos.length > 0 &&
        todos.filter((todo, index) => {
          return <TodoItem title={todo.name} status={todo.status}></TodoItem>;
        })}
      <TodoItem title="To study React fundamentals" status={true}></TodoItem>
      <TodoItem title="To study React fundamentals" status={true}></TodoItem>
      <TodoTitle title="Done" status={false} count={1}></TodoTitle>
      <TodoItem title="To study React fundamentals" status={false}></TodoItem>
      <TodoItem title="To study React fundamentals" status={false}></TodoItem>
    </div>
  );
}
export default TodoApp;
