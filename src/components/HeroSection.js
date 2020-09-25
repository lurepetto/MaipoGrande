import React from 'react'
import '../App.css'
import { Button } from './Button'
import '../styles/HeroSection.css'
 
 function HeroSection() {
     return (
       <div className="hero-container">
         <video src="/videos/video-1.mp4" autoPlay loop muted />
         <h1>Feria Virtual</h1>
         <div className="hero-btns">
           <Button
             className="btns"
             buttonStyle="btn--outline"
             buttonSize="btn--large"
           >
             Únete a nuestra comunidad
           </Button>
         </div>
       </div>
     );
 }
/* <Button
  className="btns"
  buttonStyle="btn--primary"
  buttonSize="btn--large"
>
  Contactanos
          </Button> */
 export default HeroSection
 