import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }

`;

export const RepositoryInfo = styled.section`

  margin-top: 7px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }


    div {
      margin-left: 24px;

      strong {
        font-size: 25px;
        color: #3d3d4d;
      }

      p {
        font-size: 15px;
        margin-top: 4px;
        color: #737380;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 30px;

    li {

      & + li {
        margin-left: 65px;
      }

      strong {
        display: block;
        font-size: 30px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.section`
 margin-top: 65px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 19px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    & + a {
      margin-top:16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    margin: 0 13px;
    display: flex;
    flex: 1;
    flex-direction: column;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    span {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
    margin-left: 0 auto;
    color: #cbcbd6;
  }
`;
