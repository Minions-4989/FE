import styled from 'styled-components';

const Image = ({ imageSrc, altText }) => {
  return <Img src={imageSrc} alt={altText} />;
};

export default Image;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
