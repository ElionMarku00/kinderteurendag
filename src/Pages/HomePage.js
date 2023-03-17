import React from 'react'
import styled from 'styled-components'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

import { useNavigate } from "react-router-dom";
import { AppContext } from '../context';

// base page with a grid and icons inside for the questions. each question will reveal a letter after answered correctly
function HomePage() {

    const navigate = useNavigate()
    // const navToGuessPage = () => navigate(`/game`)

    const { data } = React.useContext(AppContext)

    return (
        <Layout>

            <FamilyRestroomIcon sx={{ fontSize: 70 }} />

            <Title>DOCTOR FOR 1 DAY</Title>
            <CustomH6>Help Lucas and Marie find the code word the doctor needs to help the patient. With this code word you receive a lovely gift ! Choose the image below that matches the activity and answer the questions to find the code word . Good luck!
            </CustomH6>

            <Grid>

                {data.map((item) => {

                    let { name, solved, letter, icon } = item

                    console.log(icon);

                    return (<ImgContainer key={name} onClick={() => { !solved ? navigate(`/game`, { state: { currentGame: name } }) : navigate(`/correct`) }}>
                        {!solved
                            ? <img src={`/images${icon}`} alt={`${name}`} width="80%" height="auto" />
                            : <h1>{letter}</h1>
                        }
                    </ImgContainer>)

                })}

            </Grid>

            <BottomText>
                WHAT IS THE CODE WORD WE ARE LOOKING FOR?
            </BottomText>

        </Layout>

    )
}

const Layout = styled.section`
    display: grid;
    grid-template-columns: 0.5fr 2fr;
    background: lightblue;
    height: 100vh; 
    width: 100vw;
    /* align-items: center; */
    
    border-radius:1rem;
`;

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

const CustomH6 = styled.h6`
 grid-column: 1 / 3;
 padding:1rem;

 text-align:center;

`;

const Title = styled.h1`

align-self:center;
justify-self:center;

`;

const BottomText = styled.h3`

grid-column: 1 / 3;
text-align:center;

`;

const ImgContainer = styled.section`

/* 
border: 5px solid #555; */



`;

export default HomePage