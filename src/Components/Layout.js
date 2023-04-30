
import styled from "styled-components";

function Layout({children}) {
    return (
        <Grid>{children}</Grid>
    )
}

export default Layout

const Grid = styled.main`
    display:grid;
    height:100vh;
    width:100vw;

    grid-template-columns:repeat(5,1fr);
    grid-template-rows: 0.1fr 0.3fr 0.4fr 0.3fr 0.1fr;
    margin:0;

  
    /* grid-gap:3rem; */
    /* column-gap:0; */

`;