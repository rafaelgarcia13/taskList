import React, { useState } from 'react';
import { Button } from 'react-native';
import AsyncStorageFacade from '../../lib/localStorage/AsyncStorageFacade';
import { userInfoKey } from '../../lib/localStorage/localStorageKeys';
import { useStore } from '../../store/useStore';
import { Container, TextInput } from './styles';

const Login: React.FC = () => {
  const saveUserName = useStore(({ saveUserName }) => saveUserName);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = async () => {
    await AsyncStorageFacade.setItem<string>(userInfoKey, userName);
    saveUserName(userName);
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
        title="Conectar"
        disabled={!userName || !userPassword}
        onPress={handleLogin}
      />
    </Container>
  );
};

export { Login };
