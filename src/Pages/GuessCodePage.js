import React from 'react'
import Title from '../Components/Title';
import styled from 'styled-components';


const Grid = styled.main`

    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap:3rem;
    grid-column: 1 / 3;
    align-items:center;
    justify-self: center;
    justify-items:center;
    
    overflow-y:scroll;

`;



function GuessCodePage() {
  return (

    <Title text='DOCTOR FOR 1 DAY' />


  )
}

export default GuessCodePage