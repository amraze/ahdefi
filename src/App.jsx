import React, { useState } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Goals from './components/Goals/Goals';

import { useGetThemeColor } from './utils/useGetThemeColor';
import Constants from './utils/constants';
import './App.css';
const { colors } = Constants;


export default function App() {
  const savedTheme = useGetThemeColor();
  const [theme, setTheme] = useState(savedTheme ?? colors.light);

  function changeTheme() {
    if (theme?.type === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme(colors.dark);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme(colors.light);
    }
  }

  return (
    <div className="App" style={{ backgroundColor: theme?.background }}>
      <Sidebar theme={theme} changeTheme={changeTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Goals theme={theme} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
