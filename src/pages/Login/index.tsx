import React, { useCallback, useRef } from 'react';

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../hooks/authContext';

import logo from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import getValidationError from '../../utils/getValidationErrors';

import {
  Container,
  Title,
  SubTitle,
  ForgotPw,
  ForgotPwText,
  CreateAccButton,
  CreateAccText,
} from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const nav = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const { login } = useAuth();

  const passwordRef = useRef<TextInput>(null);

  const handleLogin = useCallback(
    async (data: LoginFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail is required')
            .email('Invalid e-mail'),
          password: Yup.string().required('password is required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await login({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);
          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert('Login Error', 'A problem happened during login');
      }
    },
    [login],
  );

  return (
    <>
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

            <Form ref={formRef} onSubmit={handleLogin}>
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                name="password"
                icon="lock"
                placeholder="Password"
                ref={passwordRef}
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>Login</Button>

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
          <CreateAccButton onPress={() => nav.navigate('SignUp')}>
            <Icon name="log-in" size={20} color="#ff9000" />
            <CreateAccText>Create Account</CreateAccText>
          </CreateAccButton>
        </HideWithKeyboard>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
