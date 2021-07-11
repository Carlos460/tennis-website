import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 75px 0px;
  min-height: 100vh;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;

  margin: 15px auto;
  padding: 0px 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UserInput = styled(Input)``;

export const PasswordInput = styled(Input)``;

export const SubmitButton = styled.input`
  width: 100px;
  height: 30px;

  margin: 5px auto;
`;
