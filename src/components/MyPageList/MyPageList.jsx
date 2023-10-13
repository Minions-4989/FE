import styled from 'styled-components';

const MyPageList = ({ children, ...props }) => {
  return <MypageList{...props}>{children}</MypageList>;
};

export default MyPageList;

const MypageList = styled.ul`
  width: 100%;
`;
