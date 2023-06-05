import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { CheckCircle } from '../../../../assets/images/svg/CheckCircle';
import { Trash } from '../../../../assets/images/svg/Trash';
import { SpinnerLoading } from '../../../../components/spinnerLoading/SpinnerLoading';
import { GENERIC_ERROR_MESSAGE } from '../../../../services/constants';
import ToDoListService from '../../../../services/toDoListService/ToDoListService';
import { useStore } from '../../../../store/useStore';

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
  const setFeedback = useStore(({ setFeedback }) => setFeedback);
  const [isLoadingDeletion, setIsLoadingDeletion] = useState(false);
  const [isChangeCompletedStatus, setIsChangeCompletedStatus] = useState(false);

  const handleDeleteToDo = async () => {
    try {
      setIsLoadingDeletion(true);
      const isDeleted = await ToDoListService.deleteToDo(id);
      if (isDeleted) filterToDos(id);
    } catch (e) {
      let message = GENERIC_ERROR_MESSAGE;
      if (e instanceof Error) message = e.message;
      setFeedback({ isError: true, message, isOpen: true });
    } finally {
      setIsLoadingDeletion(false);
    }
  };

  const handleCheckToDo = async () => {
    try {
      setIsChangeCompletedStatus(true);
      const newIsCompleted = await ToDoListService.updateToDo(id, !isCompleted);
      updateToDosStatus(id, newIsCompleted);
    } catch (e) {
      let message = GENERIC_ERROR_MESSAGE;
      if (e instanceof Error) message = e.message;
      setFeedback({ isError: true, message, isOpen: true });
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
