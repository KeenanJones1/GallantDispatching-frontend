import React from 'react'
import styled from 'styled-components'
import img from '../gallant_images/road.jpg'
import {spacing, colors, fonts} from '../utils/_var'
import {HeroBtn} from '../utils/Buttons'

const Wrapper = styled.section`
 min-height: 100vh;
 background: ${colors.$background};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;
 font-family: ${fonts.$mainFont};
  .btn{
    margin-top: 5rem;
  }
 h1{
  letter-spacing: ${spacing.$letter};
  font-size: 2.5rem;
  color: white;
 }

h2{
  font-size: 0.9rem;
}
 h4{
 margin-bottom: 1.25rem;
 font-size: 1.5rem;
 color: white;
 }

 .hero-banner{
  text-align: center;
  color: white;
 }

 .hero-banner h1{
  text-transform: uppercase;
 }

 .hero-banner p{
  max-width: 35rem;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: ${spacing.$letter}
 }

 @media(min-width:768px){
   background-image: url(${img});
   background-position: center;
   background-size: cover;
   background-color:rgba(61, 90, 128, 0.7);
  .overlay{
     width:100vw;
     height:100vh;
     background: rgba(61, 90, 128, 0.6);
     display: flex;
     justify-content: center;
     margin: 0;
     align-items: center;
    }

    .hero-banner{
     padding: 0; 
    }

    .hero-baner p {
     max-width: 45rem;
    }

    h2{
      font-size: 1.8rem;
    }

    h1{
      font-size: 4rem;
    }
  }
`

const Hero = () => {
 return (
  <Wrapper id="hero">
   <div className="overlay">
    <div className="hero-banner">
     <h4>A small business helping small businesses</h4>
     <h1>GALLANT DISPATCHING</h1>
     <h2>COMPETITIVE RATES | FREE BILLING & INVOICING | DEDICATED DISPATCHER</h2>
     <HeroBtn className="btn">Learn More</HeroBtn>
    </div>
   </div>
  </Wrapper>
 )
}

export default Hero
