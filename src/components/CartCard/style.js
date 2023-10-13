import styled from 'styled-components';
import Wrap from '../ui/Wrap/Wrap';
import Span from '../ui/Span/Span';
import Li from '../ui/Li/Li';

export const ListItem = styled(Li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border: ${(props) => props.border === 'border' && '1px solid #e2e2e2'};
  border-radius: 4px;
  margin-bottom: 20px;
`;
export const ProductInfo = styled(Wrap)`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  justify-content: space-around;
`;

export const ImgWrap = styled(Wrap)`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
export const CountWrap = styled(Wrap)`
  margin-left: 8%;
  input {
    width: 10px;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const PriceText = styled(Span)`
  margin-left: 15%;
`;
export const OrderTotalPrice = styled(Wrap)`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid #c7c6c6;
  justify-content: space-around;
  span {
    margin: 30px 0;
  }
`;
export const AllCheckBoxWrap = styled(Wrap)`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  input {
    margin: 0 24px 10px;
  }
`;
