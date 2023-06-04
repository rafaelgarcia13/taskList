import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListTodos } from '../screens/listTodos/ListTodos';

const Stack = createNativeStackNavigator();

const SignedInStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListTodos" component={ListTodos} />
  </Stack.Navigator>
);

export { SignedInStack };
