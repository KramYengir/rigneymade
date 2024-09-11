"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSunFill } from "react-icons/bs";

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
      className="py-2 hover:scale-105 hover:text-rm-primary-700 dark:hover:text-rm-primary-400 "
    >
      {theme === "light" ? <BsMoonStars /> : <BsSunFill />}
    </button>
  );
};

export default ThemeToggle;
