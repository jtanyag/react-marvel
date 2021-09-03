import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ image, name, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{name}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;