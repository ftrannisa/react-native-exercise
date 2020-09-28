import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Splash,
  About,
  Portfolio,
  Add,
  Login,
  Project,
  Register,
  Skills,
  WelcomeAuth,
  Home,
} from '../pages';

const Stack = createStackNavigator();

export default AuthStack = () => {
  return (
    <Stack.Navigator options={{headerShown: false}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
