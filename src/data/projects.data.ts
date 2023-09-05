import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    name: 'IHML',
    image: require('../assets/img/ihml.jpg'),
    url: 'https://dhml-staging.herokuapp.com/',
    type: 'advanced',
    order: 1
  },
  {
    id: nanoid(),
    name: 'e-Commerce',
    image: require('../assets/img/e-commerce.jpg'),
    url: 'https://kdev-classycorner.netlify.app/',
    type: 'advanced',
    order: 1
  },
  {
    id: nanoid(),
    name: 'Jobster',
    image: require('../assets/img/jobster.jpg'),
    url: 'https://kdev-jobster.netlify.app',
    type: 'advanced',
    order: 2
  },
  {
    id: nanoid(),
    name: 'Github-users',
    image: require('../assets/img/github-users@2x.jpg'),
    url: 'https://kdev-github-users.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Hoobank',
    image: require('../assets/img/hoobank.jpg'),
    url: 'https://kc-hoobank-modern-business-website.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Gericht Restaurant',
    image: require('../assets/img/gericht.jpg'),
    url: 'https://kc-gericht-restaurant.netlify.app/',
    type: 'advanced',
    order: 3
  },
];

export default projects;