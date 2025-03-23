import Loading from "./Loading";
import SingleItem from "./SingleItem";
import { useGetTasks } from "./taskApi";  
const Items = () => {
  const { data: tasks, isLoading, error } = useGetTasks();

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.response.data}</div>;
  return (
    <div className="items">
      {tasks.map((task) => {
        return <SingleItem key={task.id} task={task} />;
      })}
    </div>
  );
};
export default Items;
