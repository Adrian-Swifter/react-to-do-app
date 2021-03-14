function Main(props) {
  const listItems = props.todos.map((todo, index) => (
    <li key={index}>
      <span>{todo}</span>
      <span className="edit_button" onClick={(e) => props.edit(index, e)}>
        {" "}
        edit{" "}
      </span>
      <button
        className={`${
          index === JSON.parse(localStorage.getItem("id")) ? "show" : "hide"
        } submit_edit`}
        onClick={(e) => props.editSubmit(index, e)}
      >
        Submit edit
      </button>
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
