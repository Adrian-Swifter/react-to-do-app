function Main(props) {
  const listItems = props.todos.map((todo, index) => (
    <li
      key={index}
    >
      {todo}
      <span onClick={() => props.deleteTodo(index)} className="delete">
        x
      </span>
    </li>
  ));

  return (
    <main>
      <ul className="todos_wrapper">{listItems}</ul>
    </main>
  );
}

export default Main;
