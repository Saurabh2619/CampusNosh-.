import { useState } from 'react';

import './App.css';
import Textform from './Textform';
// import About from './components/About';
import Navbar from './components/Navbar';
function App() {
  const[mode, setMode] = useState('light');

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    
 <Navbar title="ReactLearning by 100rabh" mode={mode} toggleMode={toggleMode}/>
 
 <div className="container" >
 <Textform heading="Saurabh The SHARMA" mode={mode}/>
 {/* <About/> */}
  </div>
    </>
  );
}

export default App;
