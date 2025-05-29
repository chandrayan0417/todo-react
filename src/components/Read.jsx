const Read = (props) => {
  const changeCheckboxHandler = (id) => {
    const updatedTodos = props.todo.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );
    props.settodo(updatedTodos);
  };

  const deleteHandler = (id) => {
    const updatedTodos = props.todo.filter((todo) => todo.id !== id);
    props.settodo(updatedTodos);
  };

  return (
    <div className=" p-5 w-[39rem] items-center rounded-md flex flex-col bg-[#DDE6ED] ">
      <ol className="">
        {props.todo.map((todo) => (
          <li
            className={`hover:scale-101 transition duration-150 ease-in-out  w-xl rounded-md text-4xl flex justify-between px-5 py-2 mb-2 ${todo.isCompleted ? "bg-gray-400" : "bg-[#836FFF]"}`}
            key={todo.id}
          >
            <div
              className={` flex  items-center justify-center  ${todo.isCompleted ? "line-through" : ""}`}
            >
              <input
                className={`scale-200 mr-4`}
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => changeCheckboxHandler(todo.id)}
              />
              {todo.title}
            </div>{" "}
            <span
              className="cursor-pointer hover:text-[#FF6464]"
              onClick={() => deleteHandler(todo.id)}
            >
              Delete
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Read;
