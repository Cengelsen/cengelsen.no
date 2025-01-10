import type { Translations } from "../types/i18n.types";

const en: Translations = {
  nav: {
    home: "Home",
    blog: "Blog",
    cv: "CV",
    projects: "Projects",
    machines: "Machines",
  },

  profile: {
    description: "A passionate developer with a love for creating innovative solutions.",
  },

  recentPosts: {
    title: "Recent Activity"
  }
};

const no: Translations = {
  nav: {
    home: "Hjem",
    blog: "Blogg",
    cv: "CV",
    projects: "Prosjekter",
    machines: "Maskiner",
  },
  
  profile: {
    description: "En lidenskapelig utvikler med et kjennetegn for å skape innovative løsninger.",
  },

  recentPosts: {
    title: "Nylig aktivitet"
  }
};

export const translations = {
  en,
  no
};