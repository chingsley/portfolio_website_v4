import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { links } from '../data/links.data';



const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (!linksRef.current) return;
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (!linksContainerRef.current) return;
    if (showLinks) {
      // note: For this to work the link-container must have a default css height: auto !important. See .link-container{} style in the css
      // see https://getir.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/22688215#overview (time: 6:20)
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <StyledWrapper id='home'>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <h2 className='text-3xl font-bold'>
              Eneja<span className='text-emerald-600'>KC</span>
            </h2>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dummy-div">
          </div>
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background: rgb(209 250 229);
  padding: 2rem 2rem;

  .nav-center {
    // border: 1px solid blue;
    // max-width: 80rem;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }

  .logo {
    height: 40px;
  }

  .links {
    list-style-type: none;
  }

  .links a {
    color: inherit;
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: .025em;
    display: block;
    padding: 0.5rem 1rem;
    transition-duration: .3s;
  }

  .links a:hover {
    --tw-text-opacity: 1;
    color: rgb(5 150 105 / var(--tw-text-opacity));
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition:  all 0.3s linear;
  }


  @media screen and (min-width: 800px) {
    background-color: rgb(209 250 229);
    padding: 2rem 7rem;

    .nav-center {
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }

    .social-icons {
      display: flex;
    }

    .social-icons a {
      margin: 0 0.5rem;
      transition: var(--transition);
    }

    .social-icons a:hover {
      color: var(--clr-primary-7);
    }
  }
`;

export default Navbar;