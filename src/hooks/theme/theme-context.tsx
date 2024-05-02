import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { ReactNode, createContext, useContext, useReducer } from "react";
import useUserPreferences from "../user-preferences/use-user-preferences";

type Theme = "light" | "dark";

interface Action {
  type: "changeTheme";
  theme: Theme;
}

type Dispatch = (action: Action) => void;

interface State {
  theme: Theme;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "changeTheme": {
      return { ...state, theme: action.theme };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const { prefersDarkColorScheme } = useUserPreferences();

  const [state, dispatch] = useReducer(countReducer, {
    theme: prefersDarkColorScheme ? "dark" : "light",
  });

  const theme = state.theme === "dark" ? webDarkTheme : webLightTheme;
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>
      <FluentProvider theme={theme}>{children}</FluentProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export { ThemeProvider, useTheme };
