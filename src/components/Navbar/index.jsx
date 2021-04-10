import React from 'react';

import * as S from './styles';

export default function Navbar() {
  return (
    <>
      <S.Container>
        <S.BrandName>Tennis Academy</S.BrandName>
        <S.LinkList>
          <S.Link>Plans</S.Link>
          <S.Link>Shop</S.Link>
          <S.Link>Login</S.Link>
        </S.LinkList>
      </S.Container>
    </>
  );
}
