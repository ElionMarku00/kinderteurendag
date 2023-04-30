
import styled from "styled-components";

function Layout({ children }) {
    return (
        <Grid>{children}</Grid>
    )
}

export default Layout

const Grid = styled.div`
    display:grid;
    height:100vh;
    width:100vw;

    grid-template-columns:repeat(5,1fr);
    grid-template-rows: 0.1fr 0.3fr auto 0.3fr 0.1fr;
    margin:0;
    padding:0;
    

    @media only screen and (max-height: 640px) {
        
        grid-template-rows: minmax(0.1fr,auto) minmax(10px,auto) minmax(60px,auto) auto 0.1fr;
        margin:0;

        padding:0;
    }

  
    /* grid-gap:3rem; */
    /* column-gap:0; */

`;