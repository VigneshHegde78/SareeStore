// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsLightbulb, BsMoon } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { FaMoon } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        // Sun Icon (Simple SVG)
        <FiSun size={20} />
      ) : (
        // Moon Icon (Simple SVG)
        <FiMoon size={20} />
      )}
    </button>
  );
}
