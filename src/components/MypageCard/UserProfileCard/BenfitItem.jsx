import Image from '../../ui/Image/Image';
import Span from '../../ui/Span/Span';
import Text from '../../ui/Text/Text';
import * as S from './style';

const BenefitItem = ({benefitItemData }) => {
  return (
    <S.BenefitItemWrap>
      <S.ImgIconTextWrap>
        <S.ImgIconWrap>
          <Image imageSrc={benefitItemData.icon}/>
        </S.ImgIconWrap>
				<Span text={benefitItemData.name } />
      </S.ImgIconTextWrap>
			<Text text={benefitItemData.benefit } />
    </S.BenefitItemWrap>
  );
};

export default BenefitItem;
