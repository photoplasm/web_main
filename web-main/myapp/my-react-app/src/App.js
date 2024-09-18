import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  const now = new Date().toLocaleTimeString('th-TH');
  const [time, setTime] = useState(now);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(UpdateTime, 1000);
    return () => clearInterval(timer); // Clear interval when component unmounts
  }, []);

  function UpdateTime() {
    let now = new Date().toLocaleTimeString('th-TH');
    setTime(now);
  }

  return (
    <div className="App">
      <MyHeader />
      <div>ขณะนี้เวลา {time}</div>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>เพิ่ม</button>
      <button onClick={() => setNum(num - 1)}>ลบ</button>
      <MyFooter />
    </div>
  );
}

export default App;