import { styled } from 'styled-components';
import SectionTitle from '../SectionTitle';
import aboutImg from '../../assets/svg/about.svg';
import aboutData from '../../data/about.data';

const AboutSection = () => {
  return (
    <Wrapper>
      <div className="content">
        <div className="content-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="content-right">
          <SectionTitle text="about" />
          <p>{aboutData}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;
  @media screen and (min-width: 800px) {
    padding: 6rem 7rem;
  }

  .content {
    &-left {
      img {
        height: 16rem;
        width: 100%;
      }
    }
    &-right {
      p {
        --tw-text-opacity: 1;
        color: rgb(71 85 105 / var(--tw-text-opacity));
        line-height: 2;
        margin-top: 2rem;
      }
    }
  }

  @media screen and (min-width: 800px) {
    .content {
      display: grid;
      grid-template-columns: repeat(2,minmax(0,1fr));
      gap: 4rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 80rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }



`;

export default AboutSection;