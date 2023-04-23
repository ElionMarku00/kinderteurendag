import React from 'react'
import styled from 'styled-components';
import { Cloud } from '../Components';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context';


const Layout = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-items:center;
`;

function FinalPage() {

  const { t } = useTranslation()
  const { playerName } = React.useContext(AppContext)

  return (
    <Layout>
      <h1>{t("title")}</h1>
      <img src={`/images/marielukas.png`} alt={`marielukas`} width="70%" height="auto" />
      <Cloud arrowUp={true}
        text={[<h3 key={`new`}
          style={{ color: 'green' }}>{t("finalpage.green").replace('{{playerName}}', playerName)}</h3>, t("finalpage.congrats").replace('{{playerName}}', playerName)]}>    </Cloud>

    </Layout>
  )
}

export default FinalPage