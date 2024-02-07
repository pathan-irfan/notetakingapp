import React, { useState, useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Saved from './Saved';
import './notification.css'
function App() {
  const [local, setLocal] = useState('');
  const [local1, setLocal1] = useState([]);
  const [noti, setNoti] = useState('');
  
 
  
  

 
  useEffect(() => {
    const alldata = localStorage.getItem('mydata');
    if (alldata) {
      setLocal1(JSON.parse(alldata));
    }
  }, []);

  const removeData = (index) => {
    const updatedData = local1.filter((_, i) => i !== index);
    localStorage.setItem('mydata', JSON.stringify(updatedData));
    setLocal1(updatedData);
  };

  const aad = () => {
    setTimeout(() => {
      setNoti('');
    }, 1000);

    setNoti(
      <div id='noti' >
        <center>
          <p id='font'>your data has been saved </p>
        </center>
      </div>
    );

    const update = [...local1, local];
    localStorage.setItem('mydata', JSON.stringify(update));
    setLocal1(update);
    setLocal('');
  };

  return (
    <div className="bg-dark">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main btn={aad} ve={local} vl={(e) => setLocal(e.target.value)} noti={noti}  />} />
          <Route path="saved" element={<Saved sv={local1} del={removeData} nw={local1}  />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
