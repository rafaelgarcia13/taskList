import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ListTodos } from '../screens/listTodos/ListTodos';

const Stack = createNativeStackNavigator();

const SignedInStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ListTodos" component={ListTodos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { SignedInStack };
