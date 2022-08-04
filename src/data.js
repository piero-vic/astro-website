export const projects = [
  {
    name: "Coin Watcher",
    description: "Web application for consulting crypto prices and news.",
    technologies: ["React", "TailwindCSS"],
    category: "web",
    image: "/images/coin-watcher.png",
    repoLink: "https://github.com/piero-vic/coin-watcher",
    demoLink: "https://piero-vic-coin-watcher.netlify.app/",
  },
  {
    name: "Space Traveler's Hub",
    description: "Single-page application that displays SpaceX rockets and missions.",
    technologies: ["React", "Redux"],
    category: "web",
    image: "/images/space-hub.png",
    repoLink: "https://github.com/Amrhub/space-travelers-hub",
    demoLink: "https://space-travelers-hub-pa.netlify.app/",
    collaborator: {
      name: "Amr Ahmed",
      github: "https://github.com/Amrhub",
    },
  },
  {
    name: "Coding Bootcamp Webpage",
    description: "Capstone project for Module 1 of Microverse.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    image: "/images/coding-bootcamp.png",
    repoLink: "https://github.com/piero-vic/coding-bootcamp-website",
    demoLink: "https://piero-vic.github.io/coding-bootcamp-website/",
  },
  {
    name: "cmp-ledger",
    description: "A nvim-cmp source for ledger accounts.",
    technologies: ["Lua"],
    category: "cli",
    image: null,
    repoLink: "https://github.com/piero-vic/cmp-ledger",
    demoLink: null,
  },
  {
    name: "ptd",
    description: "A minimal to-do list application for the command line.",
    technologies: ["Python", "Typer"],
    category: "cli",
    image: null,
    repoLink: "https://github.com/piero-vic/ptd",
    demoLink: null,
  },
  {
    name: "ani-py",
    description: "A cli tool to download and stream anime from jkanime.",
    technologies: ["Python", "Typer"],
    category: "cli",
    image: null,
    repoLink: "https://github.com/piero-vic/ani-py",
    demoLink: null,
  },
];

export const colors = {
  CSS: "text-cyan",
  HTML: "text-red",
  JavaScript: "text-yellow",
  Lua: "text-magenta",
  Python: "text-green",
  React: "text-blue",
  Redux: "text-magenta",
  TailwindCSS: "text-blue",
  Typer: "text-white",
};

export const socialMedia = {
  Github: "https://github.com/piero-vic",
  LinkedIn: "https://www.linkedin.com/in/piero-lescano",
  Twitter: "https://www.twitter.com/piero_codes",
};

export const twitter = {
  card: "summary",
  site: "@piero_codes",
  creator: "@piero_codes",
};

export const website = {
  type: "website",
  url: "https://pierolescano.com/",
  image: "logo.png",
  imageAlt: "Piero Lescano Logo",
};
