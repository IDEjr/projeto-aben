const pages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Sobre",
    to: "/sobre",
    children: [
      {
        title: "A ABEn-RS",
        to: "/sobre",
      },
      {
        title: "Diretorias",
        to: "/diretorias",
      },
      {
        title: "História",
        to: "/historia",
      },
    ],
  },
  {
    title: "Notícias",
    to: "/noticias",
  },
  {
    title: "Eventos",
    to: "/eventos",
  },
  {
    title: "Associe-se",
    to: "/associese",
  },
  {
    title: "Contato",
    to: "/contato",
  },
];

export default pages;
