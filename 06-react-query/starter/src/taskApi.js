import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
export const apiClient = axios.create({
  baseURL: "http://localhost:5001/api/tasks",
});

const tasksQueryKey = "tasks";

const artificialDelay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetch = async () => {
  await artificialDelay();
  const response = await apiClient.get("/");
  const tasks = response.data.taskList;
  return tasks;
  1;
};

export const add = async (title) => {
  await artificialDelay();
  const response = await apiClient.post("/", { title });
  return response.data;
};

export const remove = async (id) => {
  await artificialDelay();
  const response = await apiClient.delete(`/${id}`);
  return response.data;
};

export const update = async (id, task) => {
  await artificialDelay();
  const response = await apiClient.patch(`/${id}`, task);
  return response.data;
};

export const useGetTasks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [tasksQueryKey],
    queryFn: fetch,
  });
  return { data, isLoading, error };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading: isCreating } = useMutation({
    mutationFn: (taskTitle) => add(taskTitle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tasksQueryKey] });
      toast.success("task added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { createTask, isCreating };
};

export const useToggleDone = () => {
  const queryClient = useQueryClient();
  const { mutate: toggleDone, isLoading: isToggling } = useMutation({
    mutationFn: (taskId, isDone) => update(taskId, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tasksQueryKey] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { toggleDone, isToggling };
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isLoading: isDeleting } = useMutation({
    mutationFn: (taskId) => remove(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [tasksQueryKey] });
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { deleteTask, isDeleting };
};
