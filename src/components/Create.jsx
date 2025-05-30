import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
const Create = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    data.isCompleted = false;
    data.id = nanoid();
    props.settodo([...props.todo, data]);

    reset();
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
      <form className="flex" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col">
          <input
            {...register("title", { required: "title can not be empty" })}
            className="border-b text-4xl mr-10 focus:outline-0"
            type="text"
            placeholder="title..."
          />
          {errors?.title?.message && (
            <small className="text-red-300 mt-2 text-xl">{errors.title.message}</small>
          )}
        </div>

        <button
          type="submit"
          className="h-16  hover:scale-101 transition duration-150 ease-in-out cursor-pointer bg-[#836fff]  rounded-md px-10 text-2xl py-2"
        >
          Create TODO
        </button>
      </form>
    </div>
  );
};

export default Create;
