import { useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((newToDo) => [toDo, ...newToDo]);
    setToDo("");
  };
  const onClear = (event) => setToDos([]);

  return (
    <div className="App">
      <h3>My ToDos. ({toDos.length})</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your think..."
        />
        <button>Add</button>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
      <button onClick={onClear}>Clear~</button>
    </div>
  );
}

export default ToDo;
