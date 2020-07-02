import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 52px;
  margin-bottom: 6px;
  padding: 0 12px;
  background: #232129;

  flex-direction: row;
  align-items: center;

  border-radius: 8px;
  border-width: 2px;
  border-color: #232129;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)<ContainerProps>`
  margin-right: 6px;
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
    `}
`;
