import styled from 'styled-components';

export const Header = styled.div`
  padding: 75px 10px;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-around;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

export const HeaderCol = styled.div`
  display: flex;
  width: 50%;
  @media (max-width: 1000px){
    width: 100%;
  }
`;

export const Text = styled.p`
  max-width: 800px;
  height: 400px;
  display: flex;
  justify-content: center;
  margin: auto;
  
  text-align: center;
  font-size: 84px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: min-content;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  margin: auto;
  padding: 30px 0px 15px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const FormCol = styled.div`
  width: 100%;
  margin: 0px 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  padding: 0px 2px;
`;

export const SubmitButton = styled.input`
  color: white;
  background-color: #ffae2e;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;

  width: 50%;
  height: 50px;
  transition: background-color .2s ease;
  &:hover {
    background-color: #ffb94a;  
  }
`;
