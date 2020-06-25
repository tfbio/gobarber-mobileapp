import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import {
  Container,
  Title,
  SubTitle,
  ForgotPw,
  ForgotPwText,
  CreateAccButton,
  CreateAccText,
} from './styles';

const Login: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <Image source={logo} style={{ top: 20 }} />

          <Title>Welcome,</Title>
          <SubTitle>Login to access your account</SubTitle>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button>Login</Button>

          <ForgotPw
            onPress={() => {
              console.log('login');
            }}
          >
            <ForgotPwText>Forgot my password</ForgotPwText>
          </ForgotPw>
        </Container>
      </ScrollView>

      <HideWithKeyboard>
        <CreateAccButton
          onPress={() => {
            console.log('create account');
          }}
        >
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccText>Create Account</CreateAccText>
        </CreateAccButton>
      </HideWithKeyboard>
    </KeyboardAvoidingView>
  );
};

export default Login;
