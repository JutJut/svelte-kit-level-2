export interface MenuLink {
  name: string;
  link: string;
  icon: string;
}

export const indexMenuLinks: MenuLink[] = [
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

export const blogMenuLinks: MenuLink[] = [
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
];
