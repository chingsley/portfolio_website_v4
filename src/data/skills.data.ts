import { TSkill } from './../types/skill.type';
import { nanoid } from 'nanoid';

export const skills: TSkill[] = [
  {
    id: nanoid(),
    title: 'React',
    icon: 'FaReact',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: 'SiNodedotjs',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: 'SiGo',
    text: '3 years building fast, efficient and scalable servers with golang. Implemented microservice architectures with Go.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: 'SiPython',
    text: '2 years building fast, efficient and scalable servers with Python. Implemented microservice architectures with Python.',
  },
  {
    id: nanoid(),
    title: 'Ruby on Rails',
    icon: 'Ruby',
    text: '4 years building fast, efficient and scalable servers with Rails. Worked on several backend servers using Ruby on rails',
  },
];