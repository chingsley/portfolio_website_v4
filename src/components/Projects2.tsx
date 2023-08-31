import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <Wrapper>
      <SectionTitle text='projects' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e5e7eb;
  padding: 6rem 2rem;

  @media screen and (min-width: 800px) {
    padding: 6rem 7rem;
  }
`;

export default Projects;
