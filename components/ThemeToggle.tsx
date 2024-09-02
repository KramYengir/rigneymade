"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(theme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Set Light Mode"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <FaRegMoon /> : <GoSun />}
    </button>
  );
};

export default ThemeToggle;
