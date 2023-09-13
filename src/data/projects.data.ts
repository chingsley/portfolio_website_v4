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
  {
    id: nanoid(),
    name: 'GPT-3 OpenAI',
    image: require('../assets/img/gpt3.jpg'),
    url: 'https://kc-gpt3.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Showtower',
    image: require('../assets/img/showtower.jpg'),
    url: 'https://showtower.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'ImageGalore',
    image: require('../assets/img/image-galore.jpg'),
    url: 'https://kcomp-infinite-scroll.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Foodie',
    image: require('../assets/img/foodie.jpg'),
    url: 'https://kc-comp-food-menu.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Cocktail Mixer',
    image: require('../assets/img/cocktail-mixer.jpg'),
    url: 'https://kcomp-cocktails-cards.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Movie Finder',
    image: require('../assets/img/movie-finder.jpg'),
    url: 'https://kcomp-movie-list.netlify.app/',
    type: 'advanced',
    order: 3
  },
  {
    id: nanoid(),
    name: 'Interview Scheduler',
    image: require('../assets/img/interview-scheduler.jpg'),
    url: 'https://kcomp-movie-list.netlify.app/',
    type: 'advanced',
    order: 3
  }
];

export default projects;