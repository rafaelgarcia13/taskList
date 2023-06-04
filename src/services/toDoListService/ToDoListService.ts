import { HttpClient } from '../../lib/httpClient/HttpClient';
import { IHttpRequests } from '../../lib/httpClient/IHttpRequests';
import { URLS } from '../urls';
import {
  CREATE_TO_DO_ERROR_MESSAGE,
  DELETE_TO_DO_ERROR_MESSAGE,
  GET_TO_DO_ERROR_MESSAGE,
  UPDATE_TO_DO_ERROR_MESSAGE,
} from './toDoListConstants';
import { ToDoListDataMapper } from './ToDoListDataMapper';
import {
  DeleteToDoListResponse,
  GetToDoListResponse,
  ToDoListDomain,
  ToDoListPersistence,
} from './toDoListModels';

class ToDoListService {
  constructor(private http: IHttpRequests) {}

  async getAllToDos(): Promise<ToDoListDomain[]> {
    try {
      const { data } = await this.http.get<GetToDoListResponse>(URLS.listToDos);
      const domainData = data.todos.map((toDo) => ToDoListDataMapper.toDomain(toDo));
      return domainData;
    } catch {
      throw new Error(GET_TO_DO_ERROR_MESSAGE);
    }
  }

  async createToDo(toDo: ToDoListDomain): Promise<ToDoListDomain> {
    try {
      const toPersistence = ToDoListDataMapper.toPersistence(toDo);
      const { data } = await this.http.post<ToDoListPersistence>(
        URLS.addToDo,
        toPersistence,
      );
      const domainData = ToDoListDataMapper.toDomain(data);
      return domainData;
    } catch {
      throw new Error(CREATE_TO_DO_ERROR_MESSAGE);
    }
  }

  async deleteToDo(id: number): Promise<boolean> {
    try {
      const { data } = await this.http.delete<DeleteToDoListResponse>(
        `${URLS.deleteToDo}/${id}`,
      );
      return data.isDeleted;
    } catch {
      throw new Error(DELETE_TO_DO_ERROR_MESSAGE);
    }
  }

  async updateToDo(id: number, isCompleted: boolean): Promise<boolean> {
    try {
      const { data } = await this.http.put<ToDoListPersistence>(
        `${URLS.updateToDo}/${id}`,
        {
          completed: isCompleted,
        },
      );
      const domainData = ToDoListDataMapper.toDomain(data);
      return domainData.isCompleted;
    } catch {
      throw new Error(UPDATE_TO_DO_ERROR_MESSAGE);
    }
  }
}

export default new ToDoListService(new HttpClient());
