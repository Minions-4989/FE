import styled from 'styled-components';

const Main = ({ children, ...props }) => {
  return <StMain{...props}>{children}</StMain>;
};

export default Main;

const StMain = styled.main`

  max-width: 1200px;
  padding-bottom:100px ;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;
