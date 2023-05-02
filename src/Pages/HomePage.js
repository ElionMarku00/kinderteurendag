import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';


import { Layout, TopBar } from '../Components'
// base page with a grid and icons inside for the questions. each question will reveal a letter after answered correctly
function HomePage() {

    const [hpData, setHpData] = React.useState()

    React.useEffect(() => {
        const hpData = JSON.parse(localStorage.getItem('data'));
        if (hpData) {
            setHpData(hpData);
        }
    }, []);

    const { t } = useTranslation();

    const navigate = useNavigate();
    // const navToGuessPage = () => navigate(`/game`)

    const { data, playerName } = React.useContext(AppContext)

    return (<Layout>

        <TopBar
            barProps={{ style: { flexDirection: "row", justifyContent: "center" } }}
            imgProps={{ src: `/images/marielukas.png` }} >

            <Title>{t("title")}</Title>
        </TopBar>

        {/* <Img src={`/images/marielukas.png`} alt={`marielukas`} /> */}


        <CustomH4 style={{ padding: "0", margin: "0" }}>{t('homepage.text', { playerName })}</CustomH4>
        <Grid>

            {data && data.map((item) => {

                let { name, solved, letter, icon, text, type, prompt, numPages, gameHost, rightPageMessage, rightTextGreen } = item;
                return (<ImgContainer key={name}
                    onClick={() => {
                        !solved
                            ? navigate(`/game`, { state: { text, prompt, numPages, currentGame: name, type, } })
                            : navigate(`/correct`, { state: { currGameImage: icon, currGameHost: gameHost, rightText: rightPageMessage, rightGreenText: rightTextGreen } });
                    }}>
                    {!solved
                        ? <img src={`/images${icon}`} alt={`${name}`} width="80%" height="auto" />
                        : <ImgContainer><div className='letter'> <span> {letter}</span> </div> </ImgContainer>
                    }
                </ImgContainer>)

            })}

        </Grid>

        <div style={{ gridArea: "5/1/6/6", alignSelf: "end" }}>

            <Button
                variant='outlined'
                color="primary"
                style={{
                    gridColumn: "1/3",
                    textAlign: "center",
                    alignSelf: "end",

                    justifySelf: "center",

                }}
                onClick={() => navigate('/guesscode')}>
                {t('homepage.qstn')}
            </Button>
        </div>



    </Layout >


    )
}

const Grid = styled.div`

    display:grid;
    grid-template-columns: 1fr 1fr;
    
    align-items:center; 
    justify-self: center;
    justify-items:center;
    min-height:30vh;
    margin:0;
    padding:0;
    
    overflow-y:scroll;
    grid-area:3/1/5/6;

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

const ImgContainer = styled.section`
.letter {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  font-size: 44px;
  border-radius: 50%;
  border: 2px solid black;
  overflow: hidden;
  text-transform: uppercase;

   background-image: '/images/store.png';
   background-repeat: no-repeat, no-repeat;
}

@media (max-width: 500px) {
  .letter {
    width: 60px;
    height: 60px;
    font-size: 38px;
  }
}

@media (max-width: 350px) {
  .letter {
    width: 50px;
    height: 50px;
    font-size: 26px;
  }
}
`;

export default HomePage