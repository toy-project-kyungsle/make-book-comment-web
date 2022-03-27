import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;
  background: #e2e6e7;

  z-index: 1;

  width: 100%;
  height: 760px;
  overflow-x: hidden;

  border: none;

  display: flex;
  justify-content: center;
`;

export const PositionDiv = styled.div`
  position: relative;
  width: 1100px;
  height: 760px;
`;

export const MoreBackgroundImg = styled.div`
  position: absolute;
  z-index: -3;
  width: 100%;
  height: 760px;

  background: #e2e6e7;
  background: radial-gradient(circle, rgba(223, 227, 228, 1) 0%, rgba(227, 231, 232, 1) 100%);

  background-size: cover;

  @media (max-width: 1024px) {
    background: rgb(236, 240, 241);
  }
`;

export const BackgroundImg = styled.div`
  position: absolute;
  z-index: -2;
  width: 1665px;
  height: 760px;

  background-image: url('https://user-images.githubusercontent.com/79993356/154531958-e0068ede-1ae9-4b44-8522-2676c4b8d3ef.png');
  background-size: cover;

  @media (max-width: 1024px) {
    background-image: url('https://user-images.githubusercontent.com/79993356/160281782-dfbd3cdc-fdc4-4dc8-839e-8b0438f2af44.png');
    top: 180px;
    width: 100%;
    max-height: 70%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;

export const TitleBox = styled.div`
  position: absolute;
  left: 50px;
  bottom: 53px;
  width: 320px;

  @media (max-width: 768px) {
    bottom: 200px;
    width: 100%;
    padding-right: 100px;
  }
`;

export const InfoBox = styled.div`
  position: absolute;
  right: 50px;
  bottom: 40px;
  height: 15%;

  display: grid;
  grid-template-columns: 150px 120px;
  grid-template-rows: ${100 / 3}% ${100 / 3}% ${100 / 3}%;

  @media (max-width: 768px) {
    left: 50px;
  }
`;
