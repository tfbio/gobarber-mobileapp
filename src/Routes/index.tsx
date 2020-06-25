import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const AuthNav = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <AuthNav.Screen name="Login" component={Login} />
      <AuthNav.Screen name="SignUp" component={SignUp} />
    </AuthNav.Navigator>
  );
};

export default AuthRoutes;
