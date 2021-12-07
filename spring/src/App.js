import './App.css';
import React, { createRef, useEffect, useState} from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';


function App() {

  return (
   <div>            
     <Header></Header>
     <Footer></Footer>     
   </div>
  );
}
export default App;
