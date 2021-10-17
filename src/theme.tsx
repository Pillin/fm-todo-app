export const themes = {
  light: {
    name: "LIGHTMODE",
    logo: "/images/icon-moon.svg",
    backgroundColor: "hsl(0, 0%, 98%)",
    background: {
      desktop: "/images/bg-desktop-light.jpg",
      mobile: "/images/bg-mobile-light.jpg"
    }
  },
  dark: {
    name: "DARKMODE",
    logo: "/images/icon-sun.svg",
    backgroundColor: "hsl(235, 21%, 11%)",
    background: {
      desktop: "/images/bg-desktop-dark.jpg",
      mobile: "/images/bg-mobile-dark.jpg"
    }
  }
};

export type Theme = typeof themes.light;