import React from 'react'
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Cloud, GameZone } from '../Components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

function GamePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const { currentGame, text, type, prompt, numPages } = location.state;
  const { gameType, data, checkAnsw, getGameDataByName} = React.useContext(AppContext)

  // const image = data.find(x => x.name === currentGame).icon

  const [_, currGameAns, currGameImage, currGameHost, currGameTitle] = getGameDataByName(currentGame);
  console.log(currentGame, checkAnsw);

  return (

    <Grid>
      <ImgContainer style={{ justifySelf: 'end' }}>
        <img src={`/images${currGameImage}`} alt={`${currGameImage}`} width="80%" height="auto" />
      </ImgContainer>
      {currGameTitle ? <h1 style={{ justifyContent: 'center', color: 'black', alignContent: 'center' }}>
        {currGameTitle}
      </h1> : null}

      <Cloud arrowUp={false} text={text === "" || !text ? prompt : text} />

      <Flex>

        <ImgContainer>
          {/* <FamilyRestroomIcon sx={{ fontSize: 70 }} /> */}
          <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="80%" height="auto" />
        </ImgContainer>

        {
          numPages === 2 ?
            <ImgContainer style={{ alignSelf: 'center' }} >
              <ArrowForwardIcon
                style={{ color: 'black' }}
                sx={{ fontSize: 70 }}

                onClick={() => {
                  navigate(`/gamep2`, { state: { currentGame: currentGame } });
                }
                }
              />
            </ImgContainer>
            :
            <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} checker={checkAnsw} currentGame={currentGame} data={data} />

        }

      </Flex >

    </Grid >
  )
}



const Grid = styled.main`

    color:green;
    display:grid;
    grid-template-columns: 1fr ;
    grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr;
    grid-gap:3rem;
    align-items:center;
    grid-column: 1 / 3;
    justify-self: center;

    height:100vh;
    width:100vw;

    row-gap: 0;

`;


const ImgContainer = styled.div`

    /* border-radius: 50%;
    border-color: black;
    border: 5px solid #555; */
`;

const Flex = styled.div`

display:flex;
flex-direction:row;
justify-content:space-between;


`;

const CustomH1 = styled.h1`

text-align:center;
color:black;
`;


export default GamePage