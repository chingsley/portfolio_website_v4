import { TSkill } from './../types/skill.type';
import { nanoid } from 'nanoid';

export const skills: TSkill[] = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: 'FaHtml5',
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: 'FaJs',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: 'FaReact',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: 'Go',
    text: '3 years building fast, efficient and scalable servers with golang. Implemented microservice architectures with Go.',
  },
];