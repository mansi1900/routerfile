import React from 'react';
import Home from './component/pages/home';
import About from './component/pages/About';
import Contact from './component/pages/contact';
import Navbar from "./component/layout/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='.' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




/*import React from 'react';
import Home from './component/pages/home';
import About from './component/pages/About';
import Contact from './component/pages/contact';
import Navbar from "./component/layout/Navbar";
import { BrowserRouter}  from 'react-router-dom';

function App() 
{
  return (
    <BrowserRouter>
  
    <div className="App">
      <Navbar/>

      
        <Route path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/contact' Component={Contact}/>




      
  
    </div>
  

    </BrowserRouter>
    
  )
}

export default App;
