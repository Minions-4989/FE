import styled from 'styled-components';


const UserInfoCard = ({children, ...props }) => {

    return (
      <CardItemWrap {...props}>
        {children }
      </CardItemWrap>
    );

};

export default UserInfoCard;

const CardItemWrap = styled.li`
  width: 100%;

`;
