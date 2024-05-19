import {
  FluentProvider,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import useUserPreferences from "../user-preferences/use-user-preferences";

interface ThemeProviderProps {
  children: ReactNode;
  theme?: unknown;
}

const Themes = {
  light: webLightTheme,
  dark: webDarkTheme,
};

const ThemeContext = createContext<
  | {
      isDarkMode: boolean;
      setIsDarkMode: Dispatch<SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function ThemeProvider({ children, theme: themeProp }: ThemeProviderProps) {
  const { prefersDarkColorScheme } = useUserPreferences();
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkColorScheme);

  const theme = themeProp ?? (isDarkMode ? webDarkTheme : webLightTheme);
  const value = { isDarkMode, setIsDarkMode };

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

export { ThemeProvider, Themes, useTheme };

