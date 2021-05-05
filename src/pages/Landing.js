import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Beliefs from '../components/Beliefs'
import Details from '../components/Details'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Wrapper = styled.div`

`

const Landing = () => {
 return (
  <Wrapper>
   <Hero />
   <Beliefs />
   <Details />
   <Testimonials />
   <Contact />
  </Wrapper>
 )
}

export default Landing
