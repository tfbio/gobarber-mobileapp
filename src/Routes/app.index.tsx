import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import CreateAppointment from '../pages/CreateAppointment';
import AppointmentCreated from '../pages/AppointmentCreated';

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
      <AppNav.Screen name="Profile" component={Profile} />
      <AppNav.Screen name="CreateAppointment" component={CreateAppointment} />
      <AppNav.Screen name="AppointmentCreated" component={AppointmentCreated} />
    </AppNav.Navigator>
  );
};

export default AppRoutes;
