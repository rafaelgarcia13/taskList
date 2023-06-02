import { GetToDoListResponse, ToDoList } from './toDoListModels';

class ToDoListDataMapper {
  static toDomain(domainTrendingMovie: GetToDoListResponse): ToDoList {
    return {
      id: domainTrendingMovie.id,
      isCompleted: domainTrendingMovie.completed,
      title: domainTrendingMovie.todo,
      userId: domainTrendingMovie.userId,
    };
  }

  static toPersistence(persistenceContact: ToDoList): GetToDoListResponse {
    return {
      id: persistenceContact.id,
      completed: persistenceContact.isCompleted,
      todo: persistenceContact.title,
      userId: persistenceContact.userId,
    };
  }
}

export { ToDoListDataMapper };
