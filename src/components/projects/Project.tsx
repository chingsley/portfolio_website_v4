import React from "react";
import styled from "styled-components";
import { TProject } from "../../types/Project.type";


const Project: React.FC<TProject> = ({ name, image, url }) => {
  return (
    <Wrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project"
    >
      <img src={image} alt={name} className="img" />
      <footer>
        <h2>{name}</h2>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
  transition: 0.3s ease-in-out all;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow:  0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
  }
  .img {
    width: 100%;
    display: block;
    border-top-left-radius:  0.25rem;
    border-top-right-radius:  0.25rem;
    height: 15rem;
    object-fit: cover;
  }

  footer {
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
    color: rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 1rem 1.25rem;
    background: white;
    border-bottom-left-radius:  0.25rem;
    border-bottom-right-radius:  0.25rem;

    h2 {
      letter-spacing: .025em;
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
`;

export default Project;
