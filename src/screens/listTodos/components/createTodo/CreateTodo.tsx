import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { PlusCircle } from '../../../../assets/images/svg/PlusCircle';
import { SpinnerLoading } from '../../../../components/spinnerLoading/SpinnerLoading';
import { ToDoListDomain } from '../../../../services/toDoListService/toDoListModels';
import ToDoListService from '../../../../services/toDoListService/ToDoListService';
import { Container, TextInput, TextInputWrapper, TouchableOpacity } from './styles';

interface ICreateTodoProps {
  saveNewTodo: (toDo: ToDoListDomain) => void;
}

const CreateTodo: React.FC<ICreateTodoProps> = ({ saveNewTodo }) => {
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [inputHeight, seInputHeight] = useState(0);
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
    } catch {
      console.log('deu erro, subir toast');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <TextInputWrapper>
        <TextInput
          style={{ height: inputHeight }}
          placeholder="Digite uma nova tarefa"
          value={text}
          onChangeText={setText}
          multiline
          onContentSizeChange={(e) => seInputHeight(e.nativeEvent.contentSize.height)}
          onKeyPress={handleCreateNewToDo}
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
