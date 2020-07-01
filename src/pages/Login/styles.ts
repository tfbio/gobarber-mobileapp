import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';

  margin: 60px 0 4px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';

  margin-bottom: 30px;
`;

export const ForgotPw = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const ForgotPwText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  border-top-width: 1px;
  border-color: #212329;
  padding: 10px 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreateAccText = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 10px;
`;
