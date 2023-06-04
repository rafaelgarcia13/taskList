import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { CheckCircle } from '../../../../assets/images/svg/CheckCircle';
import { Trash } from '../../../../assets/images/svg/Trash';
import { SpinnerLoading } from '../../../../components/spinnerLoading/SpinnerLoading';
import ToDoListService from '../../../../services/toDoListService/ToDoListService';

import { Container, Title, IconsView, TitleView } from './styles';

interface ITodoCardProps {
  title: string;
  isCompleted: boolean;
  id: number;
  filterToDos: (id: number) => void;
  updateToDosStatus: (id: number, isCompleted: boolean) => void;
}

const TodoCard: React.FC<ITodoCardProps> = ({
  title,
  isCompleted,
  id,
  filterToDos,
  updateToDosStatus,
}) => {
  const theme = useTheme();

  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);
  const [isChangeCompletedStatus, setIsChangeCompletedStatus] = useState(false);

  const handleDeleteToDo = async () => {
    try {
      setIsLoadingDeletion(true);
      const isDeleted = await ToDoListService.deleteToDo(id);
      if (isDeleted) filterToDos(id);
    } catch {
      console.log('deu erro, subir toast');
    } finally {
      setIsLoadingDeletion(false);
    }
  };

  const handleCheckToDo = async () => {
    try {
      setIsChangeCompletedStatus(true);
      const newIsCompleted = await ToDoListService.updateToDo(id, !isCompleted);
      updateToDosStatus(id, newIsCompleted);
    } catch {
      console.log('deu erro, subir toast');
    } finally {
      setIsChangeCompletedStatus(false);
    }
  };

  return (
    <Container>
      <TitleView>
        <Title numberOfLines={4}>{title}</Title>
      </TitleView>
      <IconsView>
        {isChangeCompletedStatus ? (
          <SpinnerLoading />
        ) : (
          <TouchableOpacity onPress={handleCheckToDo}>
            <CheckCircle
              width={35}
              height={35}
              fill={isCompleted ? theme.colors.completed : theme.colors.disabled}
            />
          </TouchableOpacity>
        )}
        {isLoadingDeletion ? (
          <SpinnerLoading />
        ) : (
          <TouchableOpacity onPress={handleDeleteToDo}>
            <Trash width={35} height={35} />
          </TouchableOpacity>
        )}
      </IconsView>
    </Container>
  );
};

export { TodoCard };
