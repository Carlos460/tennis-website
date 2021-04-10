import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  margin: 15px;
  height: 300px;
  width: 400px;
  border-radius: 10px;
  background-image: url('./img/training.jpg');
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: -120px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: bottom 0.5s ease;
  &:hover {
    bottom: 0px;
  }
`;

export const Title = styled.div`
  width: 100%;
  color: white;
  font-size: 22px;
  padding: 5px 0px 0px;
`;

export const Description = styled.div`
  color: white;
  text-align: left;
  padding: 10px;
`;
