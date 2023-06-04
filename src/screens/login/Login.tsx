import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { useUserStore } from '../../store/userStore';
import { Container, TextInput } from './styles';

const Login: React.FC = () => {
  const saveUserName = useUserStore(({ saveUserName }) => saveUserName);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleLogin = () => {
    saveUserName(userName);
  };

  return (
    <Container>
      <Text>Pagina de Login</Text>
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
