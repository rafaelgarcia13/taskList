import React from 'react';
import { SignedOutStack } from './SignedOutStack';
import { SignedInStack } from './SignedInStack';
import { useStore } from '../store/useStore';
import { NavigationContainer } from '@react-navigation/native';

const AuthNavigator: React.FC = () => {
  const userName = useStore(({ userName }) => userName);

  return (
    <NavigationContainer>
      {userName ? <SignedInStack /> : <SignedOutStack />}
    </NavigationContainer>
  );
};

export { AuthNavigator };
