import React, { Fragment } from 'react';
import { useQuery } from 'react-query';
import { FlatList } from 'react-native';

import { Header } from '../../components/header/Header';
import { TodoCard } from './components/todoCard/TodoCard';

import { URLS } from '../../services/urls';
import ToDoListService from '../../services/toDoListService/ToDoListService';
import { Divider, ListContainer, Container } from './styles';
import { SpinnerLoading } from '../../components/spinnerLoading/SpinnerLoading';

const ListTodos: React.FC = () => {
  const { data: todDos, isLoading } = useQuery(URLS.listToDos, () =>
    ToDoListService.getAllToDos(),
  );

  return (
    <Container>
      <Header />
      <ListContainer>
        <FlatList
          data={todDos}
          renderItem={({ item }) => (
            <TodoCard isCompleted={item.isCompleted} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={Divider}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={isLoading ? <SpinnerLoading /> : <Fragment />}
        />
      </ListContainer>
    </Container>
  );
};

export { ListTodos };
