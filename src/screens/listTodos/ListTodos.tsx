import React, { Fragment, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { FlatList } from 'react-native';

import { Header } from '../../components/header/Header';
import { TodoCard } from './components/todoCard/TodoCard';

import { URLS } from '../../services/urls';
import ToDoListService from '../../services/toDoListService/ToDoListService';
import { ToDoListDomain } from '../../services/toDoListService/toDoListModels';
import { Divider, ListContainer, Container } from './styles';
import { SpinnerLoading } from '../../components/spinnerLoading/SpinnerLoading';

const ListTodos: React.FC = () => {
  const { data, isLoading } = useQuery(URLS.listToDos, () =>
    ToDoListService.getAllToDos(),
  );

  const [todDos, setToDos] = useState(data);

  const filterToDos = async (id: number) => {
    const filteredToDos = todDos?.filter((toDo) => toDo.id !== id);
    setToDos(filteredToDos);
  };

  const updateToDosStatus = async (id: number, isCompleted: boolean) => {
    const newStatusToDos = todDos?.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, isCompleted } as ToDoListDomain;
      }
      return toDo;
    });
    setToDos(newStatusToDos);
  };

  useEffect(() => {
    setToDos(data);
  }, [data]);

  return (
    <Container>
      <Header />
      <ListContainer>
        <FlatList
          data={todDos}
          renderItem={({ item }) => (
            <TodoCard
              isCompleted={item.isCompleted}
              title={item.title}
              id={item.id}
              filterToDos={filterToDos}
              updateToDosStatus={updateToDosStatus}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            isLoading ? <SpinnerLoading marginTop={16} /> : <Fragment />
          }
        />
      </ListContainer>
    </Container>
  );
};

export { ListTodos };
