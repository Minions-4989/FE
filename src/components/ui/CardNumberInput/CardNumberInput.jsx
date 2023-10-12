import { Fragment } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Wrap from '../Wrap/Wrap';
import Text from '../Text/Text';

const cardInfo = [
  {
    name: 'firstCardNumber',
    placeholder: '1234',
  },
  {
    name: 'secondCardNumber',
    placeholder: '5678',
  },
  {
    name: 'thirdCardNumber',
    placeholder: '7891',
  },
  { name: 'fourthCardNumber', placeholder: '0111' },
];

const CardNumberInput = ({
  handleCardNumberInputChange,
  validateCardNumber,
  addPaymentInputRef,
  cardNumberInput
}) => {
  return (
    <label>
      <span>카드번호</span>
      <CardWrap>
        <CardInputWrap>
          {cardInfo.map(({ name, placeholder }, index) => (
            <Fragment key={name}>
              <CardInput
                name={name}
                value={cardNumberInput[name]}
                placeholder={placeholder}
                onChange={handleCardNumberInputChange}
                onBlur={validateCardNumber}
                ref={(ref) => addPaymentInputRef(name, ref)}
              />
              {index < cardInfo.length - 1 && <div>-</div>}
            </Fragment>
          ))}
        </CardInputWrap>
        <Text />
      </CardWrap>
    </label>
  );
};

export default CardNumberInput;

const CardWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    height: 20px;
  }
`;
const CardInputWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    height: 20px;
  }
`;
const CardInput = styled(Input)`
  width: 40px;
  text-align: center;
`;
