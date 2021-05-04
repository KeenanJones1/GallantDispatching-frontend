import React from 'react'
import styled from 'styled-components'
import img from '../gallant_images/deskwork.jpg'
import {spacing, colors, fonts} from '../utils/_var'

const Wrapper = styled.section`
 min-height: 80vh;
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

const Beliefs = () => {
 return (
  <Wrapper>
   <div className="overlay">
    <div className="hero-banner">
     <article className="title">
      <h2>Our Beliefs</h2>
     </article>
     <article classNam="details">
      <p>
       We work with owner-operators and trucking companies with any fleet size. Our dispatchers have a 5 truck limit so they have more time to concentrate on each of their trucks. We never book a load without Your approval, You will decide on dates, time, destinations and all your preferences will be taken in consideration. Therefore, the quality of our service is the priority for us. Keeping high standards, we prove our intentions and deliver solutions to assist our customers.
      </p>
     </article>
    </div>
   </div>
  </Wrapper>
 )
}

export default Beliefs
