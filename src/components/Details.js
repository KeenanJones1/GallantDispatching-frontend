import React from 'react'
import styled from 'styled-components'
import img from '../gallant_images/trailers.jpg'
import {spacing, colors, fonts} from '../utils/_var'

const Wrapper = styled.section`
 min-height: 80vh;
 background: ${colors.$background};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;
 font-family: ${fonts.$mainFont};
 color: white;

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

const Details = () => {
 return (
  <Wrapper>
   <div className="overlay">
    <div className="title">
     <h2>How We Can Help You</h2>
    </div>

    <div className="section-center">
     <article id="detail">
      <h3>Customer Service</h3>
      <p>Our clients are the key to our success. We go above and beyond to ensure we’re delivering what the client is asking for. You tell us where and when you want to run. We inform you of your options. You choose the load. We book it and send you the rate confirmation. We can fill any gaps for future growth for a fraction of the cost.</p>
     </article>

     <article id="detail">
       <h3>Just Drive</h3>
       <p>Together we will succeed. You focus on safely delivering the load, and we’ll handle paperwork, phone calls, emails, fright negotiations, credit checks and roadside assistance. If you’re not making money then we’re not making money. Well paid freight opportunities from any location in the country, taking in consideration all your preferences.</p>
     </article>
     <article id="detail">
      <h3>Consulting</h3>
      <p>7% dispatching per/week (per truck). You will be billed at the end of the week for every load. Partnering with Factoring company allows us to use factoring invoicing. We help your business upgrade or downgrade as and when needed. Office overhead savings, Dedicated Freight, Trucking Experts, we add value to your bottom line.</p>
     </article>
    </div>
   </div>
  </Wrapper>
 )
}

export default Details
