import React from 'react'
import styled from 'styled-components'
import img from '../gallant_images/trailers.jpg'
import {spacing, colors, fonts} from '../utils/_var'

const Wrapper = styled.section`
 color: white;
 line-height: 1.5;
 font-family: ${fonts.$mainFont};
 background: ${colors.$background};


 h2{
  margin: 0;
  padding: 1rem;
 }

 h3{
  font-size: 1.5rem;
 }

 .detail{
   padding: auto;
   padding-bottom: 4rem;
   max-width: 30rem;
   border-bottom: 2px solid white;
 }


 p, h3{
  max-width: 17rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-bottom: 0;
 }

 p{
   font-size: 1.02rem;
   font-weight: bold;
 }

 .title{
  text-align: center;
  text-transform: uppercase;
  font-size: 1.09rem;
  /* padding-top: 4rem; */
  max-width: 18rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
 }

 @media(min-width: 992px){
   background-image: url(${img});
   background-position: center;
   background-size: cover;
   background-color:rgba(61, 90, 128, 0.8);
   .overlay{
     width:100vw;
     background: rgba(61, 90, 128, 0.6);
     justify-content: center;
     margin: 0;
     align-items: center;
     padding: 10px 0;
    }

    .title{
      border-top: none;
      font-size: 1.7rem;
      max-width: 50vw;
    }

    p{
      font-size: 1.35rem;
      max-width: 25vw;
    }

    .detail{
      padding:0;
      border-left: 2px solid white;
      border-bottom: 0;
    }
  }

  

    @media(min-width: 576px){
     .section-center{
       display: flex;
       justify-content: space-between; 
       flex-wrap: wrap;
     }

     .detail{
       flex: 0 0 calc(33.33% - 1rem);
       margin-bottom: 1rem;
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
      <article className="detail">
       <h3>Customer Service</h3>
       <p>Our clients are the key to our success. We go above and beyond to ensure we’re delivering what the client is asking for. You tell us where and when you want to run. We inform you of your options. You choose the load. We book it and send you the rate confirmation. We can fill any gaps for future growth for a fraction of the cost.</p>
      </article>

      <article className="detail">
        <h3>Just Drive</h3>
        <p>Together we will succeed. You focus on safely delivering the load, and we’ll handle paperwork, phone calls, emails, fright negotiations, credit checks and roadside assistance. If you’re not making money then we’re not making money. Well paid freight opportunities from any location in the country, taking in consideration all your preferences.</p>
      </article>
      <article className="detail">
       <h3>Consulting</h3>
       <p>7% dispatching per/week (per truck). You will be billed at the end of the week for every load. Partnering with Factoring company allows us to use factoring invoicing. We help your business upgrade or downgrade as and when needed. Office overhead savings, Dedicated Freight, Trucking Experts, we add value to your bottom line.</p>
      </article>
     </div>
    </div>
  </Wrapper>
 )
}

export default Details
