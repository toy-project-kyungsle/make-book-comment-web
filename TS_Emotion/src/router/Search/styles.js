/** @jsx jsx */
import styled from '@emotion/styled';

export const Header = styled.div`
  margin: 150px 0 200px 0;

  font-family: 'Open Sans', sans-serif;
  color: #3e4756;

  .topment {
    position: relative;

    font-family: 'Open Sans', sans-serif;

    width: 300px;
    margin: 0 auto;
    .topbtn {
      position: absolute;
      left: -260px;
      bottom: -3px;

      & button {
        border: none;
        background-color: white;
      }
      & button:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;

export const Empty = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 200px;
  margin: 0 auto;
`;

export const Next = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.Left};

  font-family: 'Open Sans', sans-serif;
  color: rgb(75, 75, 75);

  .clickDiv {
    width: 100px;
    & span {
      margin-right: 10px;
    }
  }

  .clickDiv:hover {
    cursor: pointer;
    color: grey;
  }
`;