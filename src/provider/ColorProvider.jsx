import React, { useState } from "react";
import ColorContext from "./ColorContext";

export default function ColorProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ColorContext.Provider value={{ theme, setTheme }}>
      {children}
    </ColorContext.Provider>
  );
}
