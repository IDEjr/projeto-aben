const pages = [
  {
    title: "Home",
    to: "/Home",
  },
  {
    title: "Sobre",
    to: "/Sobre",
    children: [
      {
        title: "A ABEn-RS",
        to: "/Sobre",
      },
      {
        title: "Diretorias",
        to: "/diretorias",
      },
      {
        title: "História",
        to: "/Historia",
      },
    ],
  },
  {
    title: "Notícias",
    to: "/Noticias",
  },
  {
    title: "Eventos",
    to: "/Eventos",
  },
  {
    title: "Associe-se",
    to: "/Associese",
  },
  {
    title: "Contato",
    to: "/Contato",
  },
];

export default pages;
