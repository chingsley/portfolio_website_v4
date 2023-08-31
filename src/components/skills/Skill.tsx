import styled from "styled-components";
import Icon from "../Icon";

interface SkillProps {
  icon: string;
  title: string;
  text: string;
}
const Skill: React.FC<SkillProps> = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <span>
        <Icon type={icon} />
      </span>
      <h4>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h4 {
    margin-top: 1.5rem;
    font-weight: 700;
  }
  p {
    margin-top: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
  }
`;
export default Skill;
