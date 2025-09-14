import { TSkill } from './../types/skill.type';
import { nanoid } from 'nanoid';

export const skills: TSkill[] = [
  {
    id: nanoid(),
    title: 'Typescript/ NodeJS',
    icon: 'SiNodedotjs',
    text: 'Expertise in Typescript/ NodeJS, with 7 years of professional experience building robust, scallable and dynamic web applications with a focus on excellent user experience.',
  },
  {
    id: nanoid(),
    title: 'Go',
    icon: 'SiGo',
    text: '4 years building fast, efficient and scalable servers with golang. Implemented highly resilient and distrubuted systems using for large scale organizations.',
  },
  {
    id: nanoid(),
    title: 'React & React Native',
    icon: 'FaReact',
    text: 'Skilled in React and React Native, building interactive and high-performance front-end applications based on scalable component architecture'
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: 'SiPython',
    text: '4 years professional experience with python flask. Basic data anylisis with Pandas, numpy and scipy.',
  },
  {
    id: nanoid(),
    title: 'Ruby on Rails',
    icon: 'Ruby',
    text: 'Have worked on a couple of fullstack applications using rails and embeded ruby templae. Built a few backend servers with Ruby on Rails.',
  },
  {
    id: nanoid(),
    title: 'Database',
    icon: 'FiDatabase',
    text: 'I have 7+ years experience working with both relational and non-relational DB including Postgres, MySQL, MsSQL, Oracle, SQLite, and MongoDB.',
  },
];