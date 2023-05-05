import React from 'react'

import styled from 'styled-components'
import { TextField } from "@mui/material";
import { AppContext } from '../context';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Layout, BottomBar, TopBar, DropDownList, ForwardButton } from '../Components';

import { analytics, logEvent } from "../Analytics/firebaseConfig"
import { LogType, logEventName } from '../Analytics/analyticsKeys';

const ImgContainer = styled.div`

    height:50px;
    width:auto;

`;

const MainAttraction = styled.div`

    display:flex;
    flex-direction:column;
    align-items: center;
    grid-area:2/1/3/6;  
    row-gap:10px;

`;

function InitialPage() {

    const { setPlayerName } = React.useContext(AppContext)
    const navigate = useNavigate();
    const { t, } = useTranslation();


    return (

        <Layout>

            <TopBar barProps={{ style: { justifyContent: "center", alignSelf: "center" } }} >
                <h1 style={{ alignSelf: "center", margin: "0", padding: "0" }}>{t("welcome")}</h1>
            </TopBar>

            <MainAttraction>

                <DropDownList />

                <TextField id="outlined-basic"
                    label={t("nameQuestion")}
                    variant="outlined"
                    style={{ width: '70vw' }}
                    onChange={(e) => {
                        setPlayerName(e.target.value)
                        localStorage.setItem("playerName", JSON.stringify(e.target.value))
                    }}
                />
            </MainAttraction>

            <ImgContainer style={{ alignSelf: 'start', gridArea: "3/1/4/6" }} >
                <img src="/images/LOGO 2023.PNG" alt="French flag" style={{ height: 'auto', width: '70vw', objectFit: 'contain' }} />
            </ImgContainer>

            <ImgContainer style={{ alignSelf: 'center', gridArea: '4/1/5/6' }} >
                <img src="/images/Logo_IVFBrussels_CMYK_blauw_DEF.jpg" alt="French flag" style={{ height: 'auto', width: '70vw', objectFit: 'contain' }} />
            </ImgContainer>

            <BottomBar barProps={{
                style: { justifyContent: "center", },
            }}
                renderBackward={false}
                forwardprops={{
                    onClickEvent: () => {

                        logEvent(analytics, logEventName.language)
                        navigate(`/home`, { replace: true })
                    }
                }
                }
            />
        </Layout>

    )
}
export default InitialPage