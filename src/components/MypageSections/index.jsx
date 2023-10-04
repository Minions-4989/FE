import styled from 'styled-components';
import Article from '../ui/Article/Article';
import Section from '../ui/Section/Section';
import Title from '../ui/Title/Title';

const MyPageSection = (Content) => {
  return ({ titleText, ...props }) => {
    return (
      <Section>
        <SectionHeader titleText={titleText} />
        <Article>
          <Content {...props} />
        </Article>
      </Section>
    );
  };
};

export default MyPageSection;



const SectionHeader = styled(Title)`
  font-size: 22px;
  font-weight: 400;
  padding: 16px 0;
  margin-top: 50px;

`;
