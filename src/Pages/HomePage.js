import React from 'react'
import styled from 'styled-components'

import { useNavigate } from "react-router-dom";
import { AppContext } from '../context';

// base page with a grid and icons inside for the questions. each question will reveal a letter after answered correctly
function HomePage() {

    const navigate = useNavigate();
    // const navToGuessPage = () => navigate(`/game`)

    const { data } = React.useContext(AppContext)

    return (<Layout>

            <Img src={`/images/marielukas.png`} alt={`marielukas`}  />
            <Title>DOCTOR FOR 1 DAY</Title>
        {/* <Flex>
        </Flex > */}


        <CustomH6>Help Lucas and Marie find the code word the doctor needs to help the patient. With this code word you receive a lovely gift ! Choose the image below that matches the activity and answer the questions to find the code word . Good luck!
        </CustomH6>
        <Grid>

            {data.map((item) => {

                let { name, solved, letter, icon, text, type } = item

                return (<ImgContainer key={name}
                    onClick={() => {
                        !solved
                            ? navigate(`/game`, { state: { text, currentGame: name, type, gameHost: Math.random() < 0.5 ? '/Lukas.png' : '/Marie.png' } })
                            : navigate(`/correct`)
                    }}>
                    {!solved
                        ? <img src={`/images${icon}`} alt={`${name}`} width="80%" height="auto" />
                        : <ImgContainer><h1>{letter}</h1> </ImgContainer>
                    }
                </ImgContainer>)

            })}

        </Grid>

        <BottomText onClick={() => navigate('/guesscode')}>
            WHAT IS THE CODE WORD WE ARE LOOKING FOR?
        </BottomText>

    </Layout>

    )
}

const Layout = styled.div`
    display: grid;
    grid-template-columns:repeat(5,1fr);
    grid-template-rows:0.1fr 0.1fr 4fr 0.2fr;
    height: 100vh; 
    width: 100vw;
    margin:0;
    row-gap:0;

`;

const Grid = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    
    align-items:center; 
    justify-self: center;
    justify-items:center;
    min-height:20vh;
    
    overflow-y:scroll;
    grid-area:3/1/5/6;
`;

// const Flex = styled.div`

//     display:flex;
//     height:30%;
//     max-height: 150px;
//     flex-direction:row;
//     flex-wrap:nowrap;
//     align-items:center;
//     justify-content: space-around;
//     padding:10px;

//     grid-area:1/1/1/6;

//     object-fit: cover;
//   vertical-align: bottom;

// `;

const Img = styled.img`

height:100%;
width:auto;
max-height: 100%;
grid-area:1/1/2/2;
max-height:100px;

`;

const CustomH6 = styled.h4`
 
 padding:1rem;

 text-align:center;
 align-self:center;
 justify-self:center;

 grid-area:2/1/2/6;

`;

const Title = styled.h1`

align-self:center;
justify-self:center;
text-align:center;
grid-area:1/2/1/5;

`;

const BottomText = styled.h5`

grid-column: 1 / 3;
text-align:center;
 align-self:center;
 justify-self:center;
grid-area:6/2/6/5;

`;

const ImgContainer = styled.section`

& > h1{

    border: 5px solid #555;
    color:green;
    font-size:3rem;
    font-weight:300;
    border-radius:50%;
    padding:2rem;
    position:relative;
    bottom:30px;
}


`;

export default HomePage