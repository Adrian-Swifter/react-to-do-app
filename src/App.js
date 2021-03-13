import "./styles.css";
import "./components/Header";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todos.unshift(value);
    setTodos(todos);
    setValue("");
    console.log(todos);
  };

  const deleteTodo = (id) => {
    let newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  
  return (
    <div className="App">
      <h1>Basic To Do App</h1>
      <h2>Sto mozes za danas, ne ostavljaj za sutra!</h2>
      <Header
        value={value}
        todos={todos}
        change={handleChange}
        submit={handleSubmit}
      />
      <Main
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
