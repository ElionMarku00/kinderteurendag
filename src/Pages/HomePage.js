import React from 'react'
import styled from 'styled-components'

import { useNavigate } from "react-router-dom";
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

// base page with a grid and icons inside for the questions. each question will reveal a letter after answered correctly
function HomePage() {

    const { t } = useTranslation();

    const navigate = useNavigate();
    // const navToGuessPage = () => navigate(`/game`)

    const { data, playerName } = React.useContext(AppContext)

    return (<Layout>

        <Img src={`/images/marielukas.png`} alt={`marielukas`} />
        <Title>{t("title")}</Title>

        <CustomH4>{t('homepage.text', { playerName })}
        </CustomH4>
        <Grid>

            {data.map((item) => {

                let { name, solved, letter, icon, text, type, prompt, numPages, gameHost, rightPageMessage, rightTextGreen } = item;
                return (<ImgContainer key={name}
                    onClick={() => {
                        !solved
                            ? navigate(`/game`, { state: { text, prompt, numPages, currentGame: name, type, } })
                            : navigate(`/correct`, { state: { currGameImage: icon, currGameHost: gameHost, rightText: rightPageMessage, rightGreenText: rightTextGreen } });
                    }}>
                    {!solved
                        ? <img src={`/images${icon}`} alt={`${name}`} width="80%" height="auto" />
                        : <ImgContainer><h1>{letter}</h1> </ImgContainer>
                    }
                </ImgContainer>)

            })}

        </Grid>

        <BottomText onClick={() => navigate('/guesscode')}>
            {t('homepage.qstn')}
        </BottomText>

    </Layout >

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

const CustomH4 = styled.h4`
 
    padding:1rem;
    text-align:center;
    /* text-justify:inter-ideograph; */
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

const BottomText = styled.h4`

    grid-column: 1 / 3;
    text-align:center;
    /* text-justify:inter-ideograph; */
    align-self:center;
    justify-self:center;
    grid-area:5/1/6/6;

`;

const ImgContainer = styled.section`

& > h1{

    border: 5px solid #555;
    color:green;
    font-size:3rem;
    font-weight:300;
    border-radius:50%;
    padding:2.2rem;
    position:relative;
    bottom:30px;
}


`;

export default HomePage