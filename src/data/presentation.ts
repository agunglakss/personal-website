type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "agunglakss@gmail.com",
  title: "Hi, I’m Agung Laksono",
  description:
    "Hi, I'm a *french frontend developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I complete my pokemon card collection and learning TypeScript.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/tensaigung",
    },
    {
      label: "Github",
      link: "https://github.com/agunglakss",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/agungono/"
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/agunglakss"
    },
  ],
};

export default presentation;
