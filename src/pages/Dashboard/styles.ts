import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 38px;
  color: #3A3A3A;
  max-width: 400px;
  line-height: 46px;

  margin-top: 65px;
`;


export const Form = styled.form<FormProps>`
  margin-top: 30px;
  max-width: 600px;

  display: flex;

  input {
    flex: 1;
    height: 45px;
    padding: 0 15px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 1px solid #fff;
    border-right: 0;

    ${(props) => props.hasError
    && css`
      border: 1px solid #c53030;
    `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 189px;
    height: 45px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 65px;
  max-width: 600px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top:10px;
    }

    img {
      width: 57px;
      height: 57px;
      border-radius: 50%;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    margin: 0 14px;
    display: flex;
    flex: 1;
    flex-direction: column;

    strong {
      font-size: 15px;
      color: #3d3d4d;
    }

    span {
      font-size: 14px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: 0 auto;
    color: #cbcbd6;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
