import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Siddharth Kurariya', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my portfolio to showcase my skills and work. ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Siddharth Kurariya',
  subtitle: "I'm a Graphic Designer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello gorgeous people there!, This is Siddharth a Graphic Designer. I create and combine symbols, images and text to form visual representations of ideas and messages.',
  paragraphTwo: 'I use typography, visual arts, and page layout techniques to create visual compositions. Common applications of graphic design include corporate design (logos and branding), editorial design (magazines, newspapers and books), wayfinding or environmental design, advertising, web design, communication design, product packaging, and signage.',
  paragraphThree: 'Want to know more about me? then contact us! ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Template',
    info: 'These are the best work did by me any suggestion on these would be appriciated ',
    info2: '',
    url:
      'https://www.instagram.com/p/CJDBOgXFVLEOUhNoQsvx97bmLFWQvg3ftzAfDc0/?igshid=1wj29p60lpevf',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Banner',
    info: 'Publicaly most demanded design',
    info2: '',
    url:
      "https://www.instagram.com/p/CJDBOgXFVLEOUhNoQsvx97bmLFWQvg3ftzAfDc0/?igshid=1wj29p60lpevf",
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Visiting Card',
    info: 'Want to known publicaly then this design for you only',
    info2: '',
    url:
      'https://www.instagram.com/p/CJDBOgXFVLEOUhNoQsvx97bmLFWQvg3ftzAfDc0/?igshid=1wj29p60lpevf',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'siddharthkurariya@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
    {
      id: nanoid(),
      name: '',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
