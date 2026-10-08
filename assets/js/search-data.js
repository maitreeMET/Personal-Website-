// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Preview below or download the PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-berkeley-ai-research-bair-ember-centre-working-on-vision-language-navigation-with-jonas-frey-and-siming-he",
          title: 'Joined Berkeley AI Research (BAIR), EMBER Centre, working on vision-language navigation with Jonas...',
          description: "",
          section: "News",},{id: "news-awarded-an-nsf-grant-valued-at-150-000-in-compute-via-access",
          title: 'Awarded an NSF grant valued at $150,000 in compute via ACCESS.',
          description: "",
          section: "News",},{id: "news-our-paper-racing-the-clock-won-the-best-paper-award-at-the-iros-2026-workshop-on-intelligent-information-gathering",
          title: 'Our paper Racing the Clock won the Best Paper Award at the IROS...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
