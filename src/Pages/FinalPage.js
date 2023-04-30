import React from 'react'
import styled from 'styled-components';
import { Cloud,TopBar } from '../Components';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context';

const Layout = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;
`;


const ImgContainer = styled.div`

`;

function FinalPage() {

  const { t } = useTranslation()
  const { playerName } = React.useContext(AppContext)

  return (
    <Layout>
      <TopBar barProps={{ style: { justifyContent: "center", alignSelf: "center" } }} >
        <h1 style={{ alignSelf: "center", margin: "0", padding: "0" }}>{t("title")}</h1>
      </TopBar>

      <img src={`/images/marielukas.png`} alt={`marielukas`} width="70%" height="auto" />
      <Cloud arrowUp={true}
        text={[<h3 key={`new`}
          style={{ color: 'green' }}>
          {t("finalpage.green").replace('{{playerName}}', playerName || "")}</h3>, t("finalpage.congrats").replace('{{playerName}}', playerName || "",)]}>
      </Cloud>

      <ImgContainer style={{ alignSelf: 'center' }} >
        <img src="/images/Logo_IVFBrussels_CMYK_blauw_DEF.jpg" alt="French flag" style={{ height: '100px', width: 'auto' }} />
      </ImgContainer>

      <ImgContainer style={{ alignSelf: 'center' }} >
        <img src="/images/LOGO 2023.PNG" alt="French flag" style={{ height: '100px', width: 'auto' }} />
      </ImgContainer>


    </Layout>
  )
}

export default FinalPage