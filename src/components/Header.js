function Header(props) {
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          onChange={props.change}
          type="text"
          placeholder="Type a todo"
          value={props.value}
        />
      </form>
    </div>
  );
}

export default Header;
