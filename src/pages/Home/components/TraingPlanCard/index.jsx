import React from 'react';

import * as S from './styles';

export default function TrainingPlanCard(props) {
  return (
    <>
      <S.Card>
        <S.HeadImage></S.HeadImage>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.description}</S.Description>
        <S.ButtonContainer action="">
          <S.Button>Learn More</S.Button>
        </S.ButtonContainer>
      </S.Card>
    </>
  );
}
