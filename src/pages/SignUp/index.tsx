import React, { useCallback, useRef } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Icon from 'react-native-vector-icons/Feather';

import logo from '../../assets/logo.png';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Title, BackToLoginButton, BackToLoginText } from './styles';

const SignUp: React.FC = () => {
  const nav = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const handleSignUp = useCallback((data: Object) => {
    console.log(data);
  }, []);

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

            <Title>Create your Account</Title>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                name="name"
                autoCapitalize="words"
                icon="user"
                placeholder="Name"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              <Input
                name="email"
                icon="mail"
                placeholder="E-mail"
                ref={emailRef}
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
                onSubmitEditing={() => formRef.current?.submitForm}
              />
            </Form>
            <Button onPress={() => formRef.current?.submitForm()}>
              Register
            </Button>
          </Container>
        </ScrollView>

        <HideWithKeyboard>
          <BackToLoginButton onPress={() => nav.goBack()}>
            <Icon name="arrow-left" size={20} color="#ff9000" />
            <BackToLoginText>Go Back to Login</BackToLoginText>
          </BackToLoginButton>
        </HideWithKeyboard>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
