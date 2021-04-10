import styled from 'styled-components';

export const TeamMemberCard = styled.div`
  width: 150px;
  margin: 30px 50px;

  text-align: center;
  color: white;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProfileImage = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100px;

  background-image: url('./img/profile.jpg');
  background-size: cover;
`;

export const ProfileName = styled.h1`
  font-size: 22px;
  margin-bottom: 0px;
`;

export const ProfilePosition = styled.p`
  font-size: 18px;
  margin: 0px;
`;
