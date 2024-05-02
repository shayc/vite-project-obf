import { useEffect, useState } from "react";

interface UserPreferences {
  prefersDarkColorScheme: boolean;
  prefersReducedMotion: boolean;
  prefersMoreContrast: boolean;
}

function useUserPreferences(): UserPreferences {
  const [preferences, setPreferences] = useState<UserPreferences>({
    prefersDarkColorScheme: window.matchMedia("(prefers-color-scheme: dark)")
      .matches,
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches,
    prefersMoreContrast: window.matchMedia("(prefers-contrast: more)").matches,
  });

  useEffect(() => {
    const handleMediaChange = () => {
      setPreferences({
        prefersDarkColorScheme: window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches,
        prefersReducedMotion: window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches,
        prefersMoreContrast: window.matchMedia("(prefers-contrast: more)")
          .matches,
      });
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
