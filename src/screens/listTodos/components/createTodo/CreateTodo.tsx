import React, { useState, useRef } from 'react';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components';
import { PlusCircle } from '../../../../assets/images/svg/PlusCircle';
import { SpinnerLoading } from '../../../../components/spinnerLoading/SpinnerLoading';
import { GENERIC_ERROR_MESSAGE } from '../../../../services/constants';
import { ToDoListDomain } from '../../../../services/toDoListService/toDoListModels';
import ToDoListService from '../../../../services/toDoListService/ToDoListService';
import { useStore } from '../../../../store/useStore';
import { Container, TextInputWrapper, TouchableOpacity } from './styles';

interface ICreateTodoProps {
  saveNewTodo: (toDo: ToDoListDomain) => void;
}

const CreateTodo: React.FC<ICreateTodoProps> = ({ saveNewTodo }) => {
  const setFeedback = useStore(({ setFeedback }) => setFeedback);

  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [inputHeight, seInputHeight] = useState(0);
  const inputRef = useRef<TextInput>(null);
  const [text, setText] = useState('');

  const handleCreateNewToDo = async () => {
    try {
      setIsLoading(true);
      const newTodo = {
        userId: 1,
        title: text,
        isCompleted: false,
      } as ToDoListDomain;

      const returnedTodo = await ToDoListService.createToDo(newTodo);
      saveNewTodo(returnedTodo);
      setText('');
    } catch (e) {
      let message = GENERIC_ERROR_MESSAGE;
      if (e instanceof Error) message = e.message;
      setFeedback({ isError: true, message, isOpen: true });
    } finally {
      setIsLoading(false);
      inputRef?.current?.blur();
    }
  };

  return (
    <Container>
      <TextInputWrapper>
        <TextInput
          ref={inputRef}
          style={{ height: inputHeight }}
          placeholder="Digite uma nova tarefa"
          value={text}
          onChangeText={setText}
          multiline
          onContentSizeChange={(e) => seInputHeight(e.nativeEvent.contentSize.height)}
        />
      </TextInputWrapper>

      <TouchableOpacity onPress={handleCreateNewToDo} disabled={isLoading || !text}>
        {isLoading ? (
          <SpinnerLoading size={28} />
        ) : (
          <PlusCircle
            fill={!text ? theme.colors.disabled : theme.colors.black}
            width={28}
            height={28}
          />
        )}
      </TouchableOpacity>
    </Container>
  );
};

export { CreateTodo };
