import { Wrapper, Content, MarvelLogoImg } from './Header.styles';
import MarvelLogo from '../../images/marvel_logo.svg';

const Header = () => (
  <Wrapper>
    <Content>
      <MarvelLogoImg src={MarvelLogo} alt='Marvel-logo' />
    </Content>
  </Wrapper>
);

export default Header;