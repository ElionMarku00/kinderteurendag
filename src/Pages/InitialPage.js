import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import styled from 'styled-components'
import { TextField } from "@mui/material";
import { AppContext } from '../context';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { DropDownList } from '../Components';

const ImgContainer = styled.div`

    /* border-radius: 50%;
    border-color: black;
    border: 5px solid #555; */

    & > input[type="radio"]{
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;

    }

`;


const Wrapper = styled.div`

    margin:0;
    padding:0;
    height:100vh;
    width:100vw;

    /* @media only screen and (min-width: 600px) {

    } */

`;

const FlagsFlex = styled.div`

    display:flex;
    flex-direction:column;
    align-items: center;
    row-gap:1rem;
    /* height:100vh; */

    & > :not(:last-child) {
        /* flex: 1; */
    }

`;

function InitialPage() {

    const { setPlayerName, setLanguage } = React.useContext(AppContext)
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (

        <Wrapper>

            <FlagsFlex>
                <h1 style={{ marginTop: "auto" }}>{t("welcome")}</h1>

                {/* <label>
                    <ImgContainer style={{ alignSelf: 'center' }} onClick={() => setLanguage('fr')}>
                        <input type="radio" value="option1" checked={i18n.language === "fr"} onChange={() => setLanguage('fr')} />
                        <img src="/images/fr_flag.gif" alt="French flag" style={{ height: '100px', width: 'auto' }} />
                    </ImgContainer>
                </label>
                <label>
                    <ImgContainer style={{ alignSelf: 'center' }} onClick={() => setLanguage('nl')}>
                        <input type="radio" value="option2" checked={i18n.language === "nl"} onChange={() => setLanguage('nl')} />
                        <img src="/images/nl_flag.gif" alt="Netherlands flag" style={{ height: '100px', width: 'auto' }} />
                    </ImgContainer>
                </label> */}
                {/* <label>
                    <ImgContainer style={{ alignSelf: 'center', }} onClick={() => setLanguage('en')}>
                        <input type="radio" value="option3" checked={i18n.language === "en"} onChange={() => setLanguage('en')} />
                        <img src="/images/UK_flag.gif" alt="UK flag" style={{ height: '100px', width: 'auto' }} />
                    </ImgContainer>
                </label> */}


                <DropDownList />




                <TextField id="outlined-basic"
                    label={t("nameQuestion")}
                    variant="outlined"
                    style={{ width: '70vw' }}
                    onChange={(e) => setPlayerName(e.target.value)}
                />

                <Button variant="contained" size="small" startIcon={< ArrowForwardIcon />}
                    onClick={() => navigate(`/home`, { replace: true })}>Next</Button>

            </FlagsFlex>

        </Wrapper>

    )
}

export default InitialPage