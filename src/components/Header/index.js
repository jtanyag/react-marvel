import { Link } from 'react-router-dom';
import MarvelLogo from '../../images/marvel_logo.svg';
import MLogo from '../../images/m_logo.svg';
import { Wrapper, Content, MarvelLogoImg, MLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <MarvelLogoImg src={MarvelLogo} alt='Marvel-logo' />
      </Link>
      <Link to='https://developer.marvel.com/'>
        <MLogoImg src={MLogo} alt='M-logo' />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;