const pages = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Conheça",
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
    title: "Publicações",
    to: "/posts",
  },
  {
    title: "Eventos",
    to: "/eventos",
  },
  {
    title: "Arquivo",
    to: "/arquivo",
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
