import logo from './logo.svg';
import {useState} from "react";
import ReactMarkdown from 'react-markdown'
import './App.css';

function App() {
  const [markdown,setmarkdown]=useState("Hello World!");
  return (
    <>
    <h1 align="center">Markdown Editor</h1>

    <div className="bigcontainer">
      
    <div className="left">
      <textarea className="typehere" value={markdown} onChange={(e)=>setmarkdown(e.target.value)}></textarea>
    </div>

    <div className="middle">
      <button id="save">Save</button>
      <button id="delete">Delete</button>
      <button id="toggle">Toggle</button>
    </div>

    <div className="right">
      <div className="typehereright">
      <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
