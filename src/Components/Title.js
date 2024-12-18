import React from 'react'
import styled from 'styled-components';


const TitleWrapper = styled.h1`

align-self:center;
justify-self:center;

`;

function Title(props) {

    const { text, ...otherProps } = props
    return (
        <TitleWrapper>{text}</TitleWrapper>
    )
}

export default Title