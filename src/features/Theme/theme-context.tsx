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
import useUserPreferences from "../../hooks/use-user-preferences";

interface ThemeProviderProps {
  children: ReactNode;
  dir?: "ltr" | "rtl";
  theme?: unknown;
}

export const Themes = {
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

export function ThemeProvider({
  children,
  dir = "ltr",
  theme: themeProp,
}: ThemeProviderProps) {
  const { prefersDarkColorScheme } = useUserPreferences();
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkColorScheme);

  const value = { isDarkMode, setIsDarkMode };
  const theme = isDarkMode ? webDarkTheme : webLightTheme;

  return (
    <ThemeContext.Provider value={value}>
      <FluentProvider theme={themeProp ?? theme} dir={dir}>
        {children}
      </FluentProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
