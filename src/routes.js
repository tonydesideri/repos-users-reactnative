import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
      }}
      initialRouteName="Main"
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Usuários' }}
      />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
