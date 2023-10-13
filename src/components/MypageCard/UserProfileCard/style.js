import styled from 'styled-components';
import Wrap from '../../ui/Wrap/Wrap';
import Span from '../../ui/Span/Span';

export const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
  line-height: 28px;
  padding: 19px 20px;
  align-items: center;
  border: 1px solid #e1e1e1;
`;

export const ImgWrap = styled(Wrap)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserInfo = styled(Wrap)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 400px;
  justify-content: space-between;
`;

export const UserName = styled(Span)`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;

export const BenefitWrap = styled(Wrap)`
  display: flex;
  height: 110px;
  font-weight: 600;
  font-size: 16px;
  align-items: center;
  justify-content: space-around;
  border-left: 1px solid #e2e2e2;
  flex: auto;
`;

export const BenefitItemWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
  gap: 10px;
`;
export const ImgIconTextWrap = styled(Wrap)`
  display: flex;
`
export const ImgIconWrap = styled(Wrap)`
  width: 16px;
  height: 16px;  
`;

export const Button = styled.button`
  color: #fff;
  width: 100px;
  height: 40px;
  border: 1px solid transparent;
  background-color: #181818;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
