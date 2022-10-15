import './App.css';
import Home from  './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [qrcode,setQrcode]=useState('')
  useEffect(()=>{
    const getQrcode=()=>{
      const url='';
      fetch(url,{
        method:'GET'
      }).then(res=>res.json())
      .then(data=>setQrcode(data))
    }
    getQrcode();
  },[])
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home qrcode={qrcode}/>}/>
    </Routes> 
  </Router>
  );
}
 
export default App;
