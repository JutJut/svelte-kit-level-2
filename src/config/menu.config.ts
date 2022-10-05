export interface MenuItem {
  name: string;
  link: string;
  icon: string;
}

export const indexMenuItems: MenuItem[] = [
  {
    name: 'Projects',
    link: '/#projects',
    icon: 'terminal',
  },
  {
    name: 'Blog',
    link: '/#blog',
    icon: 'feather-alt',
  },
  {
    name: 'About',
    link: '/#about',
    icon: 'user-tie',
  },
  {
    name: 'Contact',
    link: '/#contact',
    icon: 'envelope',
  },
];

export const subRouteMenuItems: MenuItem[] = [
  {
    name: 'Portfolio',
    link: '/',
    icon: 'code',
  },
  {
    name: 'Blog',
    link: '/blog',
    icon: 'feather-alt',
  },
  {
    name: 'Tags',
    link: '/tags',
    icon: 'tags',
  },
  {
    name: 'Projects',
    link: '/projects',
    icon: 'terminal',
  },
];
