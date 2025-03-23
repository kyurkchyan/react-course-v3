import { useDeleteTask, useToggleDone } from "./taskApi";

const SingleItem = ({ task }) => {
  const { deleteTask, isDeleting } = useDeleteTask();
  const { toggleDone, isToggling } = useToggleDone();

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => toggleDone(task.id, !task.isDone)}
        disabled={isToggling}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: task.isDone && "line-through",
        }}
      >
        {task.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(task.id)}
        disabled={isDeleting}
      >
        {isDeleting ? "deleting..." : "delete"}
      </button>
    </div>
  );
};
export default SingleItem;
