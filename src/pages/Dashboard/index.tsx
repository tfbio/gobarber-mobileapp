import React from 'react';

import { Container, Header, HeaderTitle, Username } from './styles';

import { useAuth } from '../../hooks/authContext';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Welcome, {'\n'}
          <Username>Fabio Oliveira</Username>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Dashboard;
