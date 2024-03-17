type Navigation = {
  name: string;
  href: string;
  external?: boolean;
};

export const layoutNavigations: Navigation[] = [
  {
    name: "Home",
    href: "https://caspade.org/caspade/index.html",
    external: true,
  },
  {
    name: "About",
    href: "https://caspade.org/caspade/about.html",
    external: true,
  },
  {
    name: "Services",
    href: "https://caspade.org/caspade/#services",
    external: true,
  },
  {
    name: "Contact",
    href: "https://caspade.org/caspade/#contact",
    external: true,
  },
];
