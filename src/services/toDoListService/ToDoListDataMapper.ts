import { ToDoListDomain, ToDoListPersistence } from './toDoListModels';

class ToDoListDataMapper {
  static toDomain(domainTrendingMovie: ToDoListPersistence): ToDoListDomain {
    return {
      id: domainTrendingMovie.id,
      isCompleted: domainTrendingMovie.completed,
      title: domainTrendingMovie.todo,
      userId: domainTrendingMovie.userId,
    };
  }

  static toPersistence(persistenceContact: ToDoListDomain): ToDoListPersistence {
    return {
      id: persistenceContact.id,
      completed: persistenceContact.isCompleted,
      todo: persistenceContact.title,
      userId: persistenceContact.userId,
    };
  }
}

export { ToDoListDataMapper };
