import React from 'react'
import styled from 'styled-components'
import {fonts, spacing, colors} from '../utils/_var'
import img from '../gallant_images/engine.jpg'
import {AboutBtn} from '../utils/Buttons'

const Wrapper = styled.div`
padding: 5rem 0;
line-height: 1.5;
font-family: ${fonts.$mainFont};
margin-top: 2rem;

h3{
 font-size: 2rem;
}
 
 .center{
  width: 90vw;
  margin:0 auto;
  max-width: 1170px; 
 }

 img {
  width: 100%;
  display: block;
}

h1,h2,h3,h4 {
  letter-spacing: ${spacing.$letter} ;
  text-transform: uppercase;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

p {
  margin-bottom: 1.25rem;
  color: black;
  font-size: 1.5rem;
}

.about-img, .about-info{
 margin-bottom:2rem;
}

.title{
 text-align: center;
  margin-bottom: 4rem;
h2 {
  text-transform: uppercase;
  font-size: 2rem;
  color: ${colors.$background}
}

span {
  color: ${colors.$btn};
}
}

@media(min-width:992px){
 .center{
  width: 95vw;
 }

}

@media(min-width: 992px){
 .center{
  display: flex; 
  justify-content: space-between;
  flex-wrap: wrap;
 }
 .about-img, .about-info{
  flex: 0 0 calc(50% - 2rem);
  margin-bottom: 0; 
  align-self: center;
 }

 p{
  font-size: 1.2rem;
 }
}


@media(min-width: 1170px){
 .about-img::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0.5rem solid ${colors.$colorBg};
  box-sizing: border-box;
  top: -1.5rem;
  left: -1.5rem;
  z-index: -1;
  }
 .about-img{
  position: relative;
 }
}

`

const About = () => {
 return (
  <Wrapper>
   <div className="title">
    <h2>About <span>US</span></h2>
   </div>

   <div className="center">
    <article className="about-img">
      <img src={img} alt="Truck engine" className="about-photo"/>
    </article>

    <article className="about-info">
     <h3>EXPLORE THE DIFFERENCE</h3>
     <p>
      Gallant Solutions is an independent freight dispatch service. Serving customers around the US. Gallant is dedicated to providing customized, engineered solutions that propel a business to succeed. Our Dispatching Service consist of a team of highly skilled and trained Truck Dispatchers that will work diligently with you as a TEAM. 
     </p>
     <p>
      We treat our clients with respect and we possess the best dispatching skills, hands down. With our easy to use trucking dispatch and trucking management software we can manage your whole trucking company. 
     </p>
     <p>
      We know that time is money and we help you maximize your money by sending you high paying loads with less dead head miles! We work with owner operators, small, and medium sized trucking companies who want to manage their trucking operation in one place.
     </p>
    </article>
    <AboutBtn className="btn">Contact Us</AboutBtn>
   </div>
  </Wrapper>
 )
}

export default About
