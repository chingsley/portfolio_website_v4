import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Project from './Project';
import projectsData from '../data/projects.data';

const Projects = () => {
  return (
    <Wrapper>
      <SectionTitle text='projects' />
      <div className="projects">
        {projectsData.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e5e7eb;
  padding: 6rem 2rem;

  @media screen and (min-width: 800px) {
    padding: 6rem 7rem;
  }

  .projects {
    margin-top: 2rem;
    display: grid;
    gap: 3rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
`;

export default Projects;
