import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMess from "./components/WelcomeMess";
import TodoItemsProvider from "./store/Todo-items-store";
// we are making a reducer funtion in this app [we can also make it in a diff file]
// reducer func should be a pure funtion i.e, it doesnt effect its surrounding and has no sideEffect

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  return (
    <TodoItemsProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMess />
        <TodoItems />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
