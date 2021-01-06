import React from "react";
function NewTask(props) {
  //basically copied this from on online todo app tutorial
  //(https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks)

  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      setValue("fdfdfdfdf");
      addTodo(value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    );
  };
}
export default NewTask;
