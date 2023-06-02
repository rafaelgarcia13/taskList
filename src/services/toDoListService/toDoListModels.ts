interface GetToDoListResponse {
  userId: number;
  id: number;
  todo: string;
  completed: false;
}

interface ToDoList {
  userId: number;
  id: number;
  title: string;
  isCompleted: false;
}

interface DeleteToDoListResponse {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  isDeleted: boolean;
}

export { DeleteToDoListResponse, GetToDoListResponse, ToDoList };
