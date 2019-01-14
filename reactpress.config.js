module.exports = {
  // used by ./services/wpapi to create api url
  wordpressApiUrl: "https://newo.me/wp-json",
  siteInformations: {
    name: "New0 Me",
    slogan:
      "newo.me content"
  },
  mainMenuLinks: [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "About",
      href: "/page?slug=about",
      as: "/page/about"
    },
    {
      title: "Github",
      href: "https://github.com/nyl-auster/reactpress",
      as: ""
    }
  ],
  ui: {
    breakpoints: {
      smallScreen: "@media (max-width: 1000px)"
    }
  }
};
