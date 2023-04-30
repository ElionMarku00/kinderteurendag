import styled from "styled-components";

import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";

function BottomBar({ barProps, renderForward = true, renderBackward = true, forwardprops, children }) {
    return (
        <Bar {...barProps} >

            {renderBackward && <BackButton />}
            {children}
            {/* { forwardprops.disabled || <ForwardButton   {...forwardprops} />} */}
            {renderForward && <ForwardButton   {...forwardprops} />}
        </Bar>
    )
}

export default BottomBar

const Bar = styled.div`

display:flex;
flex-direction:row;
grid-area:5/1/6/6;
justify-content:space-between;
/* height:10px; */
margin: 0;
padding: 0;
`;
