import React from 'react'
import {Link} from 'react-router-dom'
import img from '../gallant_images/map.jpg'
import styled from 'styled-components'
import {colors, spacing} from '../utils/_var'

const Wrapper = styled.section`
 height: 80vh;
 background: ${colors.$colorBg};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;

 h1{
  font-size: 3rem;
 }

 h2{
 margin-bottom: 1.25rem;
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

 .hero-banner h2{
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
        height: 80vh;
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

const Contact = () => {
 return (
  <Wrapper>
   <div className="overlay">
    <div className="hero-banner">
     <h1>Hit the Road with Us</h1>
     <h2>Our professional dispatchers have the contacts to keep you loaded with the best loads at the highest rates.</h2>

     <button>
      <Link to='/contact'>
       Contact Us
      </Link>
     </button>
    </div>
   </div>
  </Wrapper>
 )
}

export default Contact
