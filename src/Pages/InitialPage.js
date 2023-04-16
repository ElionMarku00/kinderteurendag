import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components'
import { TextField } from "@mui/material";
import { AppContext } from '../context';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const ImgContainer = styled.div`

    /* border-radius: 50%;
    border-color: black;
    border: 5px solid #555; */

`;


const FlagsFlex = styled.div`

    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-evenly;

`;

function InitialPage() {

    const { setPlayerName, setLanguage } = React.useContext(AppContext)
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>

            <h1>{t("welcome")}</h1>

            <TextField id="outlined-basic"
                label="What's your name, stranger?"
                variant="outlined"
                style={{ margin: '0 1rem', }}
                onChange={(e) => setPlayerName(e.target.value)}
            />

            <FlagsFlex>
                <ImgContainer style={{ alignSelf: 'center' }} onClick={() => setLanguage('fr')}>
                    <img src="/images/fr_flag.gif" alt="French flag" style={{ height: '100px', width: 'auto' }} />
                </ImgContainer>
                <ImgContainer style={{ alignSelf: 'center' }} onClick={() => setLanguage('nl')}>
                    <img src="/images/nl_flag.gif" alt="Netherlands flag" style={{ height: '100px', width: 'auto' }} />
                </ImgContainer>
                <ImgContainer style={{ alignSelf: 'center', }} onClick={() => setLanguage('en')}>
                    <img src="/images/UK_flag.gif" alt="UK flag" style={{ height: '100px', width: 'auto' }} />
                </ImgContainer>
            </FlagsFlex>

            <ImgContainer style={{ alignSelf: 'center' }} >
                <ArrowForwardIcon
                    style={{ color: 'black' }}
                    sx={{ fontSize: 70 }}
                    onClick={() => navigate(`/home`, { replace: true })} />
            </ImgContainer>

        </div>

    )
}

export default InitialPage