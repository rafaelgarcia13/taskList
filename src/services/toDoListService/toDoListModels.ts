interface ToDoListPersistence {
  userId: number;
  id: number;
  todo: string;
  completed: false;
}

interface GetToDoListResponse {
  limit: number;
  skip: number;
  total: number;
  todos: ToDoListPersistence[];
}

interface ToDoListDomain {
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

export {
  DeleteToDoListResponse,
  GetToDoListResponse,
  ToDoListDomain,
  ToDoListPersistence,
};
