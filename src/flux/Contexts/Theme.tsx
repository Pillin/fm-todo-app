import React, { useReducer, createContext, Dispatch } from "react";
import { themes, Theme } from "../../theme"


const initialState: Theme = themes.light;

const themeReducer = (state: Theme, action: { type: string }) => {
  switch (action.type) {
    case "LIGHTMODE":
      return themes.dark;
    case "DARKMODE":
      return themes.light;
    default:
      return state;
  }
};
const dispatch = {} as Dispatch<{ type: string; }>;

export const ThemeContext = createContext({ ...themes.light, dispatch });

const Provider = ThemeContext.Provider;

export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = { ...state, dispatch };
  return <Provider value={value}>{children}</Provider>;
}






