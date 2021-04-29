import React from 'react';

import * as S from './styles';

export default function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.LinkContainer>
          <S.LinkCol>
            <S.Link>Link 1</S.Link>
            <S.Link>Link 2</S.Link>
            <S.Link>Link 3</S.Link>
          </S.LinkCol>
          <S.LinkCol>
            <S.Link>Link 1</S.Link>
            <S.Link>Link 2</S.Link>
          </S.LinkCol>
          <S.LinkCol>
            <S.Link>Link 1</S.Link>
            <S.Link>Link 2</S.Link>
            <S.Link>Link 3</S.Link>
          </S.LinkCol>
          <S.LinkCol>
            <S.Link>Link 1</S.Link>
            <S.Link>Link 2</S.Link>
            <S.Link>Link 3</S.Link>
            <S.Link>Link 4</S.Link>
          </S.LinkCol>
        </S.LinkContainer>
      </S.FooterContainer>
    </>
  );
}
