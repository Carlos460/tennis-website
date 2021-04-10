import React from 'react';

import * as S from './styles';

export default function TeamMemberCard() {
  return (
    <S.TeamMemberCard>
      <S.ProfileImage />
      <S.ProfileName>Full Name</S.ProfileName>
      <S.ProfilePosition>Job Title</S.ProfilePosition>
    </S.TeamMemberCard>
  );
}
