export const themes = {
  light: {
    name: "LIGHTMODE",
    logo: "/images/icon-moon.svg",
    backgroundColor: "hsl(0, 0%, 98%)",
    backgroundList: "white",
    backgroundBoxList: "0px 35px 50px -15px rgba(194, 195, 214, 0.5)",
    lineList: "",
    background: {
      desktop: "/images/bg-desktop-light.jpg",
      mobile: "/images/bg-mobile-light.jpg"
    },
    checkbox: {
      border: "#E3E4F1",
      borderOut: "white"
    },
    line: {
      p: {
        color: {
          active: "#494C6B",
          noActive: "#D1D2DA"
        }
      },
      input: {
        color: "#393A4B",
        placeholder: "#9495A5"
      },
      button: {
        active: "#3A7CFD",
        hover: "#494C6B",
        noActive: "#9495A5"
      },
      border: "#E3E4F1"
    },
    typography: {
      p: {
        color: "#9495A5"
      }
    }
  },
  dark: {
    name: "DARKMODE",
    logo: "/images/icon-sun.svg",
    backgroundColor: "hsl(235, 21%, 11%)",
    backgroundList: "#25273D",
    backgroundBoxList: "0px 35px 50px -15px rgba(0, 0, 0, 0.5);",
    lineList: "",
    background: {
      desktop: "/images/bg-desktop-dark.jpg",
      mobile: "/images/bg-mobile-dark.jpg"
    },
    checkbox: {
      border: "#4D5067",
      borderOut: "#25273D"
    },
    line: {
      p: {
        color: {
          active: "#C8CBE7",
          noActive: "#4D5067"
        }
      },
      input: {
        color: "#C8CBE7",
        placeholder: "#767992"
      },
      button: {
        active: "#3A7CFD",
        hover: "#E3E4F1",
        noActive: "#5B5E7E"
      },
      border: "#393A4B"
    },
    typography: {

      p: {
        color: "#9495A5"
      }
    }
  }
};

export type Theme = typeof themes.light;