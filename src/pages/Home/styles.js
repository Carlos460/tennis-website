import styled from 'styled-components';

export const Header = styled.div`
  background-image: url('./img/background.jpg');
  background-size: cover;
  height: 100vh;

  font-family: 'Roboto', sans-serif; ;
`;

export const Overlay = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 300px auto;

  font-size: 24px;
  color: white;
  text-align: left;
  & > h1 {
    font-size: 60px;
  }
  & > h2 {
    font-size: 45px;
  }
`;

export const HeaderButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  font-size: 22px;
  margin: 25px 25px 0px 0px;

  outline: none;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const AboutContent = styled.div`
  max-width: 900px;
  margin: auto 15px;
  text-align: left;
`;

export const AboutTitle = styled.h1`
  font-size: 44px;
  margin: 0px 0px 10px;
`;

export const AboutText = styled.p`
  font-size: 30px;
  margin: 0px;
  letter-spacing: 2px;
`;

export const ActivityShowcase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0px;
`;

export const ActivityShowcaseContainer = styled.div`
  margin: auto;
`;

export const ActivityShowcaseRow = styled.div`
  min-height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TeamShowcase = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0px 200px;
  background-color: #ffb929;
`;

export const TrainingPlan = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 100px 0px;
  justify-content: center;
`;

export const Contact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const ContactCard = styled.div`
  margin: 50px 0px 0px;
  width: 400px;
  height: 500px;
  border-radius: 15px 0px 0px 15px;

  background-color: #ffae2e;
`;

export const ContactForm = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 500px;
  height: 600px;
`;

export const ContactTitle = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ContactNameInput = styled.input`
  padding: 5px;
  margin: 20px;
  outline: none;
  font-size: 16px;
`;

export const ContactEmailInput = styled.input`
  padding: 5px;
  margin: 20px;
  outline: none;
  font-size: 16px;
`;

export const ContactMessageInput = styled.textarea`
  margin: 20px;
  outline: none;
  padding: 5px;
  font-size: 16px;
`;

export const ContactSendInput = styled.input`
  height: 40px;
  width: 200px;
  margin: 20px auto;
  background-color: #259ff5;
  outline: none;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 16px;
`;
