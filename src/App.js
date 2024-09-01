import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
// import About from './Component/About';
import TextForm from './Component/TextForm';
import { useState } from 'react';

export default function App() {
  const [mode,setMode]=useState('dark');
  return (
    <>
      <Navbar title="Textutils" mode={mode}/>
      <div className="container">
      <TextForm heading="Enter The Text To Analyze"/>
      
      </div>
      {/* <About/> */}
      
    </>
  )
}
 
