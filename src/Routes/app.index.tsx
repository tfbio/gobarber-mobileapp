import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const AppNav = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppNav.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
      initialRouteName="Login"
    >
      <AppNav.Screen name="Dashboard" component={Dashboard} />
    </AppNav.Navigator>
  );
};

export default AppRoutes;
