import React from 'react'
import img from '../gallant_images/ship.jpg'
import styled from 'styled-components'
import { fonts, colors, spacing, shadows } from "../utils/_var";


const Wrapper = styled.section`
 min-height: 100vh;
 background: ${colors.$primary};
 display: flex;
 justify-content: center;
 margin: 0;
 align-items: center;
 font-family: ${fonts.$mainFont};
 color: white;

 .testimonials{
  width: 90vw;
  margin:0 auto;
  max-width: 1170px; 
 }

 .testimonial{
  border-left: 2px solid;
  padding-left: 20px;
  margin: 90px 0;
 }

 h1{
  letter-spacing: ${spacing.$letter};
  font-size: 2.0rem;
  color: white;
 }

 span{
 margin-bottom: 1.25rem;
 font-size: 1.8rem;
 color: white;
 }

 p{
  max-width: 47rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.5rem;
  line-height: 1.5em;
 }

 .title{
    margin-bottom:2rem;
    text-align: center;
  }

  @media(min-width: 768px){
   background-image: url(${img});
   background-position: center;
   background-size: cover;
   background-color: rgba(61, 90, 128, 0.6);
   .overlay{
    width: 100vw; 
    height: 100vh;
    background: rgba(61, 90, 128, 0.7);
    /* display: flex;
    justify-content: center; */
    margin: 0;
    /* align-items: center; */
   }

   .testimonials{
     display: flex; 
     justify-content: space-between;
     flex-wrap: wrap;
   }

   .testimonial{
    margin-bottom:2rem;
    flex: 0 0 calc(50% - 2rem);
    margin-bottom: 0; 
    align-self: center;
    position: relative;
   }
  }
`


const Testimonials = () => {
 return (
  <Wrapper>
   <div className="overlay">

     <div className="title">
      <p>Testimonials</p>
      <h1>What People Say</h1>
     </div>

    <div className="testimonials">
     <article className="testimonial">
      <p>“My experience working with Gallant was very professional. They were such a pleasure to work with. Because their dedication to customer support, we enjoyed working with them daily. I recommend them to anyone interested in growing their fleet.“</p>
      <span>Pat M.</span>
     </article>

     <article className="testimonial">
      <p>“We most recently closed out our fiscal year and are pleased to report that our relationship with Gallant Solutions achieved all of the objectives we originally established. We look forward to a long-term partnership and hope to continue to reap incremental benefits by tapping into Gallant’s expertise.”</p>
      <span>David D.</span>
     </article>
    </div>
   </div>
  </Wrapper>
 )
}

export default Testimonials
