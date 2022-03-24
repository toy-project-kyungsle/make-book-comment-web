import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Authinner = css`
  padding: 0 80px;
  margin-top: 60px;
`;

const AuthBtnContainer = css`
  position: relative;
  display: flex;
  justify-content: flex-end;

  z-index: 3;

  margin-right: 33px;
  margin-top: 20px;
`;

export const Form = styled.form`
  .inner {
    ${(props) => {
      switch (props['data-mode']) {
        case 'Auth':
          return Authinner;
        default:
          return null;
      }
    }}
  }
`;

export const BtnContainer = styled.div`
  ${(props) => {
    switch (props['data-mode']) {
      case 'Auth':
        return AuthBtnContainer;
      default:
        return null;
    }
  }}
`;
