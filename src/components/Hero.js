import React from 'react'
import styled from 'styled-components'
import img from '../gallant_images/road.jpg'
import {spacing, colors, fonts} from '../utils/_var'

const Wrapper = styled.section`
 min-height: 100vh;
 background: ${colors.$background};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;
 font-family: ${fonts.$mainFont};

 h1{
  letter-spacing: ${spacing.$letter};
  font-size: 3rem;
  color: white;
 }

 h4{
 margin-bottom: 1.25rem;
 font-size: 2rem;
 color: white;
 }

 .hero-banner{
  text-align: center;
  color: white;
  padding: 0 3rem;
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
     <button>Learn More</button>
    </div>
   </div>
  </Wrapper>
 )
}

export default Hero
