import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/authContext';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Button title="logout" onPress={logout} />
    </View>
  );
};

export default Dashboard;
