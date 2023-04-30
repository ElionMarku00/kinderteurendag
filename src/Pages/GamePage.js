import React from 'react'
import styled from 'styled-components'
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { useNavigate, useLocation } from 'react-router-dom';
import { BackButton, Cloud, ForwardButton, GameZone, Layout, TopBar, BottomBar } from '../Components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { AppContext } from '../context';
import { useTranslation } from 'react-i18next';

function GamePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const [ans, setAns] = React.useState(" ")

  const { currentGame, text, type, prompt, numPages } = location.state;
  const { gameType, data, checkAnsw, getGameDataByName } = React.useContext(AppContext)

  // const image = data.find(x => x.name === currentGame).icon

  const [_, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)

  // function checkAndRoute(ans) {
  //   let answer = checkAnsw(ans, currentGame)

  //   if (answer) {
  //     navigate('/correct', { state: { currGameImage, currGameHost, rightText, rightGreenText } })
  //   }
  //   else {
  //     navigate('/incorrect', { state: { currGameImage, currGameHost, wrongText, wrongRedText } })
  //   }
  // }

  return (

    <Layout>
      <TopBar imgProps={{ src: `/images${currGameImage}`, alt: `${currGameImage}` }} />

      <MainAttraction>
        {currGameTitle ? <h1 style={{ justifyContent: 'center', color: 'black', alignContent: 'center' }}>
          {currGameTitle}
        </h1> : null}
        <Cloud arrowUp={false} text={text === "" || !text ? prompt : text} />

        <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-start', justifySelf: 'center', gridArea: "2/3/2/4" }} />

        {/* {
          numPages === 2 ?
            <div>
              <ForwardButton currentGame={currentGame} nextPage={`/gamep2`} />
              <BackButton />

            </div>
            :
            <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} checker={checkAnsw} currentGame={currentGame} data={data} />

        } */}

        {numPages === 2 || <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} setAns={setAns} checker={checkAnsw} currentGame={currentGame} data={data} />}

      </MainAttraction>
      {/* <BottomBar forwardprops={{arrowStyle:{color:"red"}}} /> */}

      {numPages === 2 ?
        <BottomBar forwardprops={{ currentGame: currentGame, nextPage: `/gamep2` }} />
        :
        <BottomBar barProps={{ style: { justifyContent: "center" } }} renderForward={false} />
      }



      {/* <Flex>




      

      </Flex > */}

    </Layout>

    // <Grid>

    //   {/* <TopBar>

    //   </TopBar>

    //   <BottomBar>
    //     <BackButton />
    //     <ForwardButton currentGame={currentGame} onClickEvent={() => checkAndRoute(ans)} />
    //   </BottomBar > */}


    //   <ImgContainer style={{ justifySelf: 'end' }}>
    //     <img src={`/images${currGameImage}`} alt={`${currGameImage}`} width="80%" height="auto" />
    //   </ImgContainer>
    //   {currGameTitle ? <h1 style={{ justifyContent: 'center', color: 'black', alignContent: 'center' }}>
    //     {currGameTitle}
    //   </h1> : null}

    //   <Cloud arrowUp={false} text={text === "" || !text ? prompt : text} />

    //   <Flex>

    //     <ImgContainer>

    //       <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="80%" height="auto" />
    //     </ImgContainer>

    //     {
    //       numPages === 2 ?
    //         <div>
    //           <ForwardButton currentGame={currentGame} nextPage={`/gamep2`} />
    //           <BackButton />

    //         </div>
    //         :
    //         <GameZone style={{ gridArea: "4/1/5/6", justifySelf: 'center', alignSelf: 'center' }} checker={checkAnsw} currentGame={currentGame} data={data} />

    //     }

    //   </Flex >

    // </Grid >


  )
}

const MainAttraction = styled.div`

    grid-area:2/1/4/6;  

`;


// const Grid = styled.main`

//     color:green;
//     display:grid;
//     grid-template-columns: 1fr ;
//     grid-template-rows: 0.5fr 0.5fr 1fr 0.5fr;
//     grid-gap:3rem;
//     align-items:center;
//     grid-column: 1 / 3;
//     justify-self: center;

//     height:100vh;
//     width:100vw;

//     row-gap: 0;

// `;

// const Flex = styled.div`

// display:flex;
// flex-direction:row;
// justify-content:space-between;

// `;



export default GamePage