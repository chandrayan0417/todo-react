import { useState } from "react";
import { nanoid } from "nanoid";
const Create = (props) => {
  const [title, settitle] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    if (title.trim() == "") {
      settitle("");

      alert("Todo title cannot be empty!");
      return;
    }
    const now = new Date();
    const newTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
      time: now.toTimeString().split(" ")[0],
    };

    props.settodo([...props.todo, newTodo]);
    settitle("");
  }

  return (
    <div className="w-[60%]">
      <h1 className="text-8xl mb-[200px] ">
        <span className="underline text-[#836FFF] [text-decoration-thickness:5px]">
          Your{" "}
        </span>{" "}
        <br />
        To-Do List
      </h1>
      <br />
      <form onSubmit={submitHandler}>
        <input
          className="border-b text-4xl mr-10 focus:outline-0"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title..."
        />

        <button
          type="submit"
          className="hover:scale-101 transition duration-150 ease-in-out cursor-pointer bg-[#836fff]  rounded-md px-10 text-2xl py-2"
        >
          Create TODO
        </button>
      </form>
    </div>
  );
};

export default Create;
