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
    text: 'Expertise in JavaScript/NodeJS, with 6 years of professional experience building robust, scallable and dynamic web applications with a focus on excellent user experience',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: 'SiGo',
    text: '3 years building fast, efficient and scalable servers with golang. Implemented highly resilient and distrubuted systems using for large scale organizations',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: 'SiPython',
    text: '2 years professional experience with python flask. Basic data anylisis with Pandas, numpy and scipy.',
  },
  {
    id: nanoid(),
    title: 'Ruby on Rails',
    icon: 'Ruby',
    text: 'Have worked on a couple of fullstack applications using rails and embeded ruby templae. Built a few backend servers with Ruby on Rails',
  },
];