import styled from 'styled-components';
import { skills } from '../../data/skills.data';
import { TSkill } from '../../types/skill.type';
import SectionTitle from '../SectionTitle';
import Skill from './Skill';
const SkillSection = () => {
  return (
    <Wrapper className='py-20 align-element ' id='skills'>
      <SectionTitle text='teck stack' />
      <div className='skills'>
        {skills.map((skill: TSkill) => {
          return <Skill key={skill.id} {...skill} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`  
background-color: #e5e7eb;
padding: 6rem 2rem;

@media screen and (min-width: 800px) {
  padding: 6rem 7rem 1rem 7rem;
}

.skills {
  display: grid;
  gap: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  

  @media (min-width: 768px) {
    grid-template-columns: repeat(2,minmax(0,1fr));
  }
  @media (min-width: 1000px) {
      grid-template-columns: repeat(3,minmax(0,1fr));
  }

  

}

`;
export default SkillSection;
