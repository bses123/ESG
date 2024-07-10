import React from 'react';
import bses from '../assets/bses.png';
import  './Logo.css';


function Logo() {
   return (
      <>
        <div className='container'>
        <img src={bses} alt="logo"  className="Bseslogo" />
        </div>
      </>
    )
  }
  
  export default Logo