import React, {useState} from 'react'
import styled from 'styled-components'
import {spacing, colors, fonts} from '../utils/_var'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoad, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const Wrapper = styled.div`
 box-sizing: border-box;
 background: ${colors.$background};
 color: #485e74;
 line-height: 1.6;
 font-family: ${fonts.$mainFont};
 padding: 1em;
 margin-top: 5rem;

 h3{
   text-transform: uppercase;
   font-size: 1.5rem;
 }

 .container{
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
 }

 ul{
  list-style: none;
  padding: 0;
}

 .brand{
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: ${spacing.$letter};
 }

 .brand span {
  color: #ffffff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(57, 82, 163, 0.7);
}

.icons{
  margin-right: 0.5rem;
}


.wrapper > * {
  padding: 1em;
}

.company-info {
  background: #C3C9DD;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.company-info h3,
.company-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

.contact {
  background: #dcdfea;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;
  column-gap: 3rem;
  padding-right: 2rem;
}

.contact form label {
  display: block;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 1em;
  border: solid 1px #627EDC;
  border-radius: 4px;
}

.contact form textarea {
  resize: none;
}

.contact form button {
  background: ${colors.$btn};
  border: 0;
  color: #e4e4e4;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}

.contact form button:hover,
.contact form button:focus {
  background: #3952a3;
  color: #ffffff;
  outline: 0;
  transition: background-color 2s ease-out;
}

@media(min-width: 700px) {
  height: 100vh;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 2em;
  }

  .company-info {
    border-radius: 4px 0 0 4px;
  }

  .contact {
    border-radius: 0 4px 4px 0;
  }

  .company-info h3,
  .company-info ul,
  .brand {
    text-align: left;
  }
}

`



const Contact = () => {
 return (
  <Wrapper>
   <div className="container">
    <h1 className="brand"><span>Gallant Solutions LLC</span></h1>
    <div className="wrapper">
     {/* Company Info */}
     <div className="company-info">
      <h3>Gallant Dispatching</h3>
      <ul>
       <li><FontAwesomeIcon className="icons" icon={faRoad}/>
          1 East Erie St
          Suite 525-4857
          Chicago IL 60611
       </li>
       <li><FontAwesomeIcon className="icons" icon={faPhone}/>
        (773)-236-1857
       </li>
       <li><FontAwesomeIcon className="icons" icon={faEnvelope} />
        gallantdispatching@gmail.com
       </li>
      </ul>
     </div>
     {/* end of company info */}

     <div className="contact">
      <h3>E-mail Us </h3>
      <form action="" id='contact-form'>
       <p>
        <label htmlFor="">Name</label>
        <input type="text" name="name" id="name" required/>
       </p>
       <p>
        <label htmlFor="">Company</label>
        <input type="text" name="company" id="company" required/>
       </p>
       <p>
        <label htmlFor="">E-mail Address</label>
        <input type="text" name="email" id="email" required/>
       </p>
       <p>
        <label htmlFor="">Phone Number</label>
        <input type="text" name="phone" id="phone" required/>
       </p>

       <p>
        <label htmlFor="">Message</label>
        <textarea rows='5' name="message" id="message" required/>
       </p>

       <p className="full">
        <button type="submit">Submit</button>
       </p>

      </form>
     </div>
    </div>
   </div>
  </Wrapper>
 )
}

export default Contact
