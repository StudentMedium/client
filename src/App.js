import React from 'react';
import './assets/css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Home/Navbar'
import Cover from './components/Home/cover'
import OurWork from './components/Home/OurWork'
import TheProcess from './components/Home/theProcess'

function App() {
  return (
    <div >
      <Navbar/>
      <Cover/>
      <OurWork/>
      <TheProcess/>
    </div>
  );
}

export default App;
