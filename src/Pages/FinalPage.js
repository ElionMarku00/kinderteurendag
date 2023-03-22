import React from 'react'
import styled from 'styled-components';
import Cloud from '../Components/Cloud';

const Layout = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;

`;


function FinalPage() {
  return (
    <Layout>



      <h1>DOCTOR FOR 1 DAY</h1>
      <img src={`/images/marielukas.png`} alt={`marielukas`} width="70%" height="auto" />
      <Cloud arrowUp={true} 
      text={[<h3 key={`new`} 
      style={{ color: 'green' }}>Correct!</h3>, "You have found the code word the doctor needs for the patient! In return you will receive a gift on the main floor. It was great to have met you!"]}>    </Cloud>






    </Layout>
  )
}

export default FinalPage