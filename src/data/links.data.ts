export interface ILink {
  id: number;
  url: string;
  text: string;
}
export const links: ILink[] = [
  {
    id: 1,
    url: '#home',
    text: 'home',
  },
  {
    id: 5,
    url: '#skills',
    text: 'profile',
  },
  {
    id: 2,
    url: '#about',
    text: 'about',
  },
  {
    id: 3,
    url: '#projects',
    text: 'projects',
  },
];
