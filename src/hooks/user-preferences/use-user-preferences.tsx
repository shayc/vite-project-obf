import { useEffect, useState } from "react";

interface UserPreferences {
  prefersDarkColorScheme: boolean;
  prefersMoreContrast: boolean;
  prefersReducedMotion: boolean;
}

function useUserPreferences(): UserPreferences {
  const [preferences, setPreferences] =
    useState<UserPreferences>(getUserPreferences());

  useEffect(() => {
    const handleMediaChange = () => {
      setPreferences(getUserPreferences());
    };

    const mediaQueries = [
      window.matchMedia("(prefers-color-scheme: dark)"),
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(prefers-contrast: more)"),
    ];

    mediaQueries.forEach((mq) =>
      mq.addEventListener("change", handleMediaChange),
    );

    return () => {
      mediaQueries.forEach((mq) =>
        mq.removeEventListener("change", handleMediaChange),
      );
    };
  }, []);

  return preferences;
}

export default useUserPreferences;

function getUserPreferences(): UserPreferences {
  return {
    prefersDarkColorScheme: window.matchMedia("(prefers-color-scheme: dark)")
      .matches,
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches,
    prefersMoreContrast: window.matchMedia("(prefers-contrast: more)").matches,
  };
}
