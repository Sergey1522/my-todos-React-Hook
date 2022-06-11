import { useState } from "react";
function ToDoForm({ addTask }) {
  const [userInput, setUserImput] = useState("");

  const hendleChange = (e) => {
    setUserImput(e.currentTarget.value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserImput("");
  };

  const hendleKeyPress = (e) => {
    if (e.key === "Enter") {
      hendleSubmit(e);
    }
  };

  return (
    <form onSubmit={hendleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={hendleChange}
        onKeyDown={hendleKeyPress}
        placeholder="Новая задача...."
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
export default ToDoForm;
