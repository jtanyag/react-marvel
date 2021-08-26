import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 20px 0;
  margin: 0 auto;
`;

export const MarvelLogoImg = styled.img`
  width: 200px;

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const MLogoImg = styled.img`
  width: 50px;

  @media screen and (max-width: 500px) {
    width: 30px;
  }
`;