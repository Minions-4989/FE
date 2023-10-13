import styled from "styled-components";
import Wrap from "../ui/Wrap/Wrap";
import Span from "../ui/Span/Span";

const PurchaseInfo = ({labelText,value, border  }) => {
  return (
		<PaymentWrap border={border }>
			<Span text={labelText } />
			<Span text={value } />
    </PaymentWrap>
  );
};

export default PurchaseInfo;


const PaymentWrap = styled(Wrap)`
  display: flex;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => props.border === 'borderTop' && '1px solid #000'};
  span {
    margin-top: 10px;
  }
`;