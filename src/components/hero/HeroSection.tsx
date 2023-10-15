import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import heroImg from '../../assets/svg/hero.svg';
import resumeUrl from "../../data/resumeUrl.data";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className='hero'>
        <article className='hero-article left'>
          <h1 className='hero-article__name'>I'm Kingsley</h1>
          <p className='hero-article__title'>
            Fullstack Developer
          </p>
          <p className='hero-article__slogan'>
            turning ideas into interactive reality
          </p>
          <div className='hero-article__icons'>
            <a href='https://github.com/chingsley'>
              <FaGithubSquare className='hero-article__icons--icon' />
            </a>
            <a href='https://www.linkedin.com/in/kingsley-eneja-3a376a160'>
              <FaLinkedin className='hero-article__icons--icon' />
            </a>
            <a href='https://twitter.com/login?lang=en'>
              <FaTwitterSquare className='hero-article__icons--icon' />
            </a>
          </div>
          <div className='hero-article__resume'>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className='hero-article__resume--link'
            >
              Download Resume
            </a>
          </div>
        </article>
        <article className='hero-article right img-container'>
          <img src={heroImg} alt="hero img" className='hero-article__img' />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgb(209 250 229);
  padding: 6rem 2rem;

  .hero {
    // border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    gap: 2rem;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-right: 2rem;
    
    &-article {
      &__name {
        letter-spacing: .05em;
        font-weight: 700;
        font-size: 4.5rem;
        line-height: 1;
      }
      &__title {
        --tw-text-opacity: 1;
        color: rgb(51 65 85 / var(--tw-text-opacity));
        letter-spacing: .025em;
        text-transform: capitalize;
        font-size: 1.875rem;
        line-height: 2.25rem;
        margin-top: 1rem;
      }
      &__slogan {
        --tw-text-opacity: 1;
        color: rgb(51 65 85 / var(--tw-text-opacity));
        letter-spacing: .025em;
        text-transform: capitalize;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-top: 0.5rem;
      }
      &__icons {
        display: flex;
        column-gap: 1rem;
        margin-top: 1rem;

        &--icon {
          height: 2rem;
          width: 2rem;
          transition-duration: .3s;
          --tw-text-opacity: 1;
          color: rgb(100 116 139 / var(--tw-text-opacity));
        }
      }
      &__resume {
        margin-top: 2rem;

        &--link {
          text-decoration: none;
          font: inherit;
          color: white;
          border: 1px solid #059669;
          background-color: #059669;
          padding: .5rem;
          border-radius: 3px;
        }
      }
    }

    .img-container {
      display: block;
      img {
        height: 20rem;
        max-width: 100%;
      }
    }
  }

  @media (min-width: 800px) {
    background-color: rgb(209 250 229);
    padding: 6rem 7rem;
  }

  @media (max-width: 800px) {
    .hero {
      display: block;
      &-article.right {
        display: none;
        border: 1px solid blue;
      }
    }
  }
`;

export default HeroSection;