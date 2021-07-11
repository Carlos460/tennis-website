import React from 'react';

// Import Styles
import * as S from './styles';

export default function LoginPage() {
  return (
    <S.PageContainer>
      <S.Form action="/">
        <S.UserInput placeholder="Username" />
        <S.PasswordInput placeholder="Password" />
        <S.SubmitButton type="submit" value="Submit" />
      </S.Form>
    </S.PageContainer>
  );
}
