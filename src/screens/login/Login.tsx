import React, { useState } from 'react';
import { SpinnerLoading } from '../../components/spinnerLoading/SpinnerLoading';
import AsyncStorageFacade from '../../lib/localStorage/AsyncStorageFacade';
import { userInfoKey } from '../../lib/localStorage/localStorageKeys';
import { useStore } from '../../store/useStore';
import { Container, TextInput, Button, ButtonText } from './styles';

const Login: React.FC = () => {
  const saveUserName = useStore(({ saveUserName }) => saveUserName);

  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userPassword, setUserPassword] = useState('');

  const isDisabledButton = !userName || !userPassword;

  const handleLogin = async () => {
    setIsLoading(true);
    await AsyncStorageFacade.setItem<string>(userInfoKey, userName);
    saveUserName(userName);
    setIsLoading(false);
  };

  return (
    <Container>
      <TextInput
        placeholder="Digite o nome de usuário"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        placeholder="Digite sua senha"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />
      <Button
        isDisabledButton={isDisabledButton}
        disabled={isDisabledButton}
        onPress={handleLogin}
      >
        {isLoading ? <SpinnerLoading /> : <ButtonText>CONECTAR</ButtonText>}
      </Button>
    </Container>
  );
};

export { Login };
