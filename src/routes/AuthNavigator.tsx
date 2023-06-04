import React from 'react';
import { SignedOutStack } from './SignedOutStack';
import { SignedInStack } from './SignedInStack';
import { useUserStore } from '../store/userStore';
import { NavigationContainer } from '@react-navigation/native';

const AuthNavigator: React.FC = () => {
  const userName = useUserStore(({ userName }) => userName);

  return (
    <NavigationContainer>
      {userName ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

export { AuthNavigator };
