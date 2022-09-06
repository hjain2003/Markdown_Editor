import logo from './logo.svg';
import './App.css';
import Theme from './components/theme';
import { createContext } from 'react';
import {useState} from "react";
import ReactSwitch from "react-switch";

export const ThemeContext=createContext(null);

function App() {
  const [theme,setTheme]=useState("light");
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"? "dark":"light"));
  };
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className='heading'><h1 align="center">Markdown Editor</h1></div>
    <div className='App' id={theme}>
      <div className="switch">
         <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>&nbsp;&nbsp;
         <div className="text"><i><label>{theme==="light"?"Light Mode":"Dark Mode"}</label></i></div>
      </div>
      <Theme/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
