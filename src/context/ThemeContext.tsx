import React, { createContext, useState, useContext, ReactNode } from "react";

interface ThemeColors {
  primary: string;
  success: string;
  warning: string;
  danger: string;
  sidebar: string;
  background: string;
}

interface Theme {
  name: string;
  desc: string;
  colors: ThemeColors;
  swatches: string[];
}

interface ThemeContextType {
  currentTheme: string;
  setCurrentTheme: (theme: string) => void;
  themes: Record<string, Theme>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState("blue");

  const themes: Record<string, Theme> = {
    blue: {
      name: "Current Blue",
      desc: "Professional & Trustworthy",
      colors: {
        primary: "#3699FF",
        success: "#50CD89",
        warning: "#FFC700",
        danger: "#F1416C",
        sidebar: "#1E1E2D",
        background: "#F5F8FA",
      },
      swatches: ["#3699FF", "#50CD89", "#FFC700", "#F1416C"],
    },
    // ... other themes
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
