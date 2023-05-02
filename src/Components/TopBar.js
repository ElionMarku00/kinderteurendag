import styled from "styled-components";

function TopBar({ imgProps, barProps, children }) {
    return (
        <Bar {...barProps}>
            <Img {...imgProps}   />

            {children}
        </Bar>
    )
}

export default TopBar


const Bar = styled.div` 
display:flex;
flex-direction:row-reverse;
grid-area:1/1/2/6;
align-items: flex-start;
height:10vh;
margin:0;
padding:0;


@media only screen and (max-height: 650px) {

    align-items: unset;
    margin:unset;

}
`;


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
