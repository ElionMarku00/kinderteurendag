import React, { useContext } from 'react'
import { useNavigate, useLocation, } from "react-router-dom";
import styled from 'styled-components'

import { Cloud, GameZone, BackButton, ForwardButton, Layout, TopBar, BottomBar } from '../Components';
import { AppContext } from '../context';

const MainAttraction = styled.div`

    grid-area:2/1/4/6;  

`;
function GiveAnswerPage() {

    const [ans, setAns] = React.useState("")


    const { data, getGameDataByName } = useContext(AppContext)
    const navigate = useNavigate();
    const location = useLocation();
    const { currentGame, _ } = location.state;  //when passing checkAns as prop  i can;t take it because state = null for some reason. 
    const { checkAnsw } = React.useContext(AppContext)

    // const [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2] = getGameDataByName(currentGame)
    const [gameType, currGameAns, currGameImage, currGameHost, currGameTitle, currGameText, currGameTextp2, wrongRedText, wrongText, rightGreenText, rightText] = getGameDataByName(currentGame)

    function checkAndRoute(ans) {
        let answer = checkAnsw(ans, currentGame)

        if (answer) {
            navigate('/correct', { state: { currGameImage, currGameHost, rightText, rightGreenText } })
        }
        else {
            navigate('/incorrect', { state: { currGameImage, currGameHost, wrongText, wrongRedText } })
        }
    }

    return (
        <Layout>
            {/* <TopBar>
                <Img src={`/images${currGameImage}`} alt={`${currGameImage}`} />
            </TopBar>
             */}
            <TopBar imgProps={{ src: `/images${currGameImage}`, alt: `${currGameImage}` }} >
            </TopBar>

            <MainAttraction>

                <img src={`/images${currGameHost}`} alt={`${currGameHost}`} width="auto" height="70%" style={{ alignSelf: 'flex-start', justifySelf: 'center', gridArea: "2/3/2/4" }} />

                <Cloud arrowUp={true} style={{ gridArea: "3/3/4/5", marginBottom: "10px", justifySelf: 'center', alignSelf: 'flex-start' }} text={currGameTextp2} />

                <GameZone
                    style={{ gridArea: "4/1/6/6", justifySelf: 'center', alignSelf: 'center' }}
                    checker={checkAnsw}

                    currentGame={currentGame}
                    data={data}
                    ans={ans}
                    setAns={setAns} />
            </MainAttraction>

            <BottomBar forwardprops={{ onClickEvent: () => checkAndRoute(ans) }} />
            {/* <BackButton />
                <ForwardButton currentGame={currentGame} onClickEvent={() => checkAndRoute(ans)} />
            </BottomBar > */}

        </Layout>
    )
}

const Img = styled.img`
    height:auto;
    width:auto;
    /* max-height: 100%; */
    grid-area:1/5/1/6;
    max-height:100px;
    /* align-self:flex-start; */
    /* justify-self:flex-start; */
    /* margin-right:-5px; */
    object-fit: cover;
    object-position: 25% 25%; 
`;




export default GiveAnswerPage