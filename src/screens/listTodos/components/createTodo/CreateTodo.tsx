import React, { useState } from 'react';
import { PlusCircle } from '../../../../assets/images/svg/PlusCircle';
import { SpinnerLoading } from '../../../../components/spinnerLoading/SpinnerLoading';
import { ToDoListDomain } from '../../../../services/toDoListService/toDoListModels';
import ToDoListService from '../../../../services/toDoListService/ToDoListService';
import { Container, TextInput, TouchableOpacity } from './styles';

interface ICreateTodoProps {
  saveNewTodo: (toDo: ToDoListDomain) => void;
}

const CreateTodo: React.FC<ICreateTodoProps> = ({ saveNewTodo }) => {
  const [isLoading, setIsLoading] = useState(false);
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
      <TextInput
        placeholder="Digite uma nova tarefa"
        value={text}
        onChangeText={setText}
      />

      <TouchableOpacity onPress={handleCreateNewToDo} disabled={isLoading}>
        {isLoading ? <SpinnerLoading /> : <PlusCircle width={34} height={34} />}
      </TouchableOpacity>
    </Container>
  );
};

export { CreateTodo };
