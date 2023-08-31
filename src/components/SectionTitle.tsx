import styled from 'styled-components';

const SectionTitle = ({ text }: { text: string; }) => {
  return (
    <Wrapper>
      <h2>{text}</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // --tw-border-opacity: 1;
  border-bottom: 1px solid #8080801c;
  padding-bottom: 1.25rem;

  h2 {
    letter-spacing: .05rem;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
export default SectionTitle;
