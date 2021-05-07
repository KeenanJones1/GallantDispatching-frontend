import styled from 'styled-components'
import {fonts, colors, spacing, transitions} from './_var'

const HeroBtn = styled.button`
  text-transform: uppercase;
  background:${colors.$btn};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${spacing.$letter};
  display: inline-block;
  font-weight: 700;
  transition: ${transitions.$primary};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.9rem 1.6rem;
  font-size: 1.25rem;
  background: ${colors.$btn};
  text-decoration: none;
  color: white;
  font-family: ${fonts.$mainFont};
  &:hover{
   background: transparent;
   color: white;
   border-color: white;
  }
  a{
    color: white;
    text-decoration: none;
  }
`

const AboutBtn = styled.button`
  text-transform: uppercase;
  background:${colors.$btn};
  padding: 0.375rem 0.75rem;
  letter-spacing: ${spacing.$letter};
  display: inline-block;
  font-weight: 700;
  transition: ${transitions.$primary};
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  padding: 0.9rem 1.6rem;
  font-size: 1.25rem;
  background: ${colors.$btn};
  text-decoration: none;
  color: white;
  font-family: ${fonts.$mainFont};
  &:hover{
   background: ${colors.$primary};
   color: white;
   border-color: white;
  }
  a{
    color: white;
    text-decoration: none;
  }
`







export {HeroBtn, AboutBtn}