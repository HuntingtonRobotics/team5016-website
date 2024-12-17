import { getPermalink, getBlogPermalink, /*getAsset*/ } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //   ],
    // },
    {
      text: 'Upcoming Events',
      href: getPermalink('/blog/2025/frc-kickoff'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About us',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Donate', href: 'https://donorbox.org/huntington-robotics-online-donations', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'FIRST Robotics',
      links: [
        { text: 'About', href: 'https://www.firstinspires.org' },
        { text: 'Scholarship', href: 'https://www.firstinspires.org/scholarships' },
      ],
    },
    {
      title: 'Team 5016',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Results', href: 'https://www.thebluealliance.com/team/5016' },
        //{ text: 'Press', href: '#' },
        //{ text: 'Volunteer', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Huntington, New York', href: 'https://maps.app.goo.gl/Z5qTkguEbcgXu5DLA' }
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/htonrobotics' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/hungtingtonrobotics' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/team5016' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://jesseabrahams.com/"> Jesse Abrahams</a> from a template by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
