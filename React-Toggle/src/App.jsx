import React, { useState, useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const Darktheme = () => {
    setThemeMode("dark");
  }
  const Lighttheme = () => {
    setThemeMode("light");
  }
  useEffect(() => {
    document.body.className = themeMode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
    document.body.style.transition = "background-color 0.5s ease";
  }, [themeMode]);
  return (
    <ThemeProvider value={{ Lighttheme, Darktheme, themeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>


  )
}
