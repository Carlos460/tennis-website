import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function Navbar() {
  return (
    <>
      <S.Container>
        <Link to="/">
          <S.BrandName>Tennis Academy</S.BrandName>
        </Link>
        <S.LinkList>
          <a href="#training-section">
            <S.Link>Plans</S.Link>
          </a>
          <Link to="/shop">
            <S.Link>Shop</S.Link>
          </Link>
          <Link to="/login">
            <S.Link>Login</S.Link>
          </Link>
        </S.LinkList>
      </S.Container>
    </>
  );
}
