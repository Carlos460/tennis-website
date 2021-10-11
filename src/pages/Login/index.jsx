import React from 'react';

// Import Styles
import * as S from './styles';

export default function LoginPage() {
  return (
    <S.Header>
      <S.HeaderCol>
        <S.Text>Join Us Today and Explore!</S.Text>
      </S.HeaderCol>
      <S.HeaderCol>
        <S.Form action="/">
          <S.FormRow>
            <S.FormCol>
              <S.Input placeholder="First Name" />
            </S.FormCol>
            <S.FormCol>
              <S.Input placeholder="Last Name" />
            </S.FormCol>
          </S.FormRow>
          <S.FormRow>
            <S.FormCol>
              <S.Input placeholder="Email" />
            </S.FormCol>
          </S.FormRow>
          <S.FormRow>
            <S.FormCol>
              <S.Input placeholder="Password" />
            </S.FormCol>
          </S.FormRow>
          <S.FormRow></S.FormRow>
          <S.FormRow>
            <S.SubmitButton type="submit" value="Submit" />
          </S.FormRow>
        </S.Form>
      </S.HeaderCol>
    </S.Header>
  );
}
