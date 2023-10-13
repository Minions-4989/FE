import styled from 'styled-components';

const PageSectionTitle = ({sectiontitle,sectionsummary}) => {
  return (
    <SectionTitle>
          <h2>
            {sectiontitle} ㅣ<span>{sectionsummary}</span>
          </h2>
    </SectionTitle>
  )
}

export default PageSectionTitle

const SectionTitle = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #8e8e8e;
  color: #8e8e8e;

  h2 span {
    
    font-size: 14px;
  }
  
`;
