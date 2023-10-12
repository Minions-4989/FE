import { Link } from 'react-router-dom';
import DefaultUserImg from '../../../assets/images/default_profile_img.gif';
import Image from '../../ui/Image/Image';
import Text from '../../ui/Text/Text';
import Wrap from '../../ui/Wrap/Wrap';
import * as S from './style';
import { BENIFIT_ITEM_DATA } from '../../../constants/benfitItemData';
import BenefitItem from './BenfitItem';

const ProfileCard = ({ profileData }) => {
  const checkedProfileImag = profileData.profile_image
    ? profileData.profile_image
    : DefaultUserImg;
  return (
    <S.CardWrapper>
      <S.ImgWrap>
        <Image imageSrc={checkedProfileImag} altText="user_img" />
      </S.ImgWrap>
      <S.UserInfo>
        <Wrap>
          <S.UserName text={`${profileData.user_name} 님`} />
          <Text text={profileData.user_email} />
        </Wrap>
        <Wrap>
          <S.Button>
            <Link to="/my/settings">정보 수정</Link>
          </S.Button>
        </Wrap>
      </S.UserInfo>
      <S.BenefitWrap>
        {BENIFIT_ITEM_DATA.map((benefitItemData, index) => (
          <BenefitItem benefitItemData={benefitItemData} key={index} />
        ))}
      </S.BenefitWrap>
    </S.CardWrapper>
  );
};

export default ProfileCard;
