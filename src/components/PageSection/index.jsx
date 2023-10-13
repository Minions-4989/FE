import styled from 'styled-components';
import Article from '../ui/Article/Article';
import Section from '../ui/Section/Section';
import Title from '../ui/Title/Title';

const PageSection = ({ titleText, children }) => {
  return (
    <Section>
      <SectionHeader titleText={titleText} />
      <Article>{children}</Article>
    </Section>
  );
};

export default PageSection;

const SectionHeader = styled(Title)`
  font-size: 22px;
  font-weight: 400;
  padding: 16px 0;
  margin-top: 50px;
`;
