import Span from '../ui/Span/Span';
import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style';
import { useEffect, useState } from 'react';

const CartCard = ({ cartItemData, border, setTotalPrice, setTotalCount }) => {
  const [count, setCount] = useState(cartItemData.count);
  const [isChecked, setIsChecked] = useState(true);
  const [isAllChecked, setIsAllChecked] = useState(true);

  const handleCountButton = (event) => {
    const { name } = event.target;
    if (name === 'increase') {
      setCount((prev) => prev + 1);
    }
    if (count > 1 && name === 'decrease') return setCount((prev) => prev - 1);
  };
  const handleCheckChange = (event) => {
    const { name } = event.target;
    if (name === 'productCheck')
      setIsChecked((prevIsChecked) => !prevIsChecked);
    if (name === 'allProduct') {
      setIsChecked((prevIsChecked) => !prevIsChecked);
      setIsAllChecked((prevIsChecked) => !prevIsChecked);
    }
  };
  useEffect(() => {
    setTotalCount(count);
    setTotalPrice(cartItemData.price * count);
  }, [count]);
  return (
    <S.ListItem border={border}>
      <S.AllCheckBoxWrap>
        <input
          onChange={handleCheckChange}
          type="checkbox"
          checked={isAllChecked}
          name="allProduct"
        />
      </S.AllCheckBoxWrap>
      <S.ProductInfo>
        <Wrap>
          <input
            onChange={handleCheckChange}
            type="checkbox"
            checked={isChecked}
            name="productCheck"
          />
        </Wrap>
        <S.ImgWrap>
          <Image imageSrc={cartItemData.product_img} />
        </S.ImgWrap>
        <Wrap>
          <Span text={cartItemData.product_name} />
          <Text text={cartItemData.option} />
        </Wrap>
        <S.CountWrap onClick={handleCountButton}>
          <button name="decrease">-</button>
          <input type="number" value={count} />
          <button name="increase">+</button>
        </S.CountWrap>
        <S.PriceText text={cartItemData.price} />
      </S.ProductInfo>
      <S.OrderTotalPrice>
        <Span text="선택상품가격" />
        <Span text={cartItemData.price * count} />
        <Span text="배송비" />
        <Span text={0} />
        <Span text="주문가격" />
        <Span text={cartItemData.price * count} />
      </S.OrderTotalPrice>
    </S.ListItem>
  );
};

export default CartCard;
