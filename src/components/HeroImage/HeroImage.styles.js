import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
    ),
    url('//theme.zdassets.com/theme_assets/2376335/2f44d65a82e7ba216de139d166bf64d247e41315.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 550px;
  position: relative;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  margin: 0 auto;
`;

export const Text = styled.div`
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: white;
`;