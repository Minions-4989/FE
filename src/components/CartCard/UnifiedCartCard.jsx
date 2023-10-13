import Span from '../ui/Span/Span';
import Wrap from '../ui/Wrap/Wrap';
import Image from '../ui/Image/Image';
import Text from '../ui/Text/Text';
import * as S from './style'
const UnifiedCartCard = ({ cartDataItem}) => {

  return (
    <S.ListItem >
      <S.ProductInfo>
        <S.ImgWrap>
          <Image imageSrc={cartDataItem.product_img} />
        </S.ImgWrap>
        <Wrap>
          <Span text={cartDataItem.product_name} />
          <Text text={cartDataItem.option} />
        </Wrap>
          <S.CountWrap>
            <Span text={cartDataItem.count} />
          </S.CountWrap>
        <S.PriceText text={cartDataItem.price} />
      </S.ProductInfo>
    </S.ListItem>
  );
};

export default UnifiedCartCard;

