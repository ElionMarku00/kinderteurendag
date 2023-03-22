import React from 'react'
import styled from 'styled-components'

const CloudWrapper = styled.h3`
 & {
	// layout
	position: relative;
	max-width: 30em;

    margin:0 20px;

    color:black;
	
	// looks
	background-color: #fff;
	padding: 1.125em 1.5em;
	font-size: 1.25em;
	border-radius: 2rem;
    box-shadow:	0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
}

&:before {
	// layout
	content: '';
	position: absolute;
	width: 0;
	height: 0;
	bottom:  100%;
	left: 1.5em; // offset should move with padding of parent
	border: .75rem solid transparent;
	border-top: none;

    top:    ${(props) => (props.arrowUp ? "unset !important" : "100%")};
    
    transform: ${(props) => (props.arrowUp ? 'unset !important' : 'rotate(180deg)')};
  
	// looks
	border-bottom-color: #192229;
	filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, .1));
}

// dressing
& html {
	font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
	line-height: 1.5;
	font-weight: 300;
	color: #192229;
	background: linear-gradient(135deg, #F4F2F3, #BFC6D0);
}

& html, body {
	height: 100%;
	display:flex;
	justify-content:center;
	align-items:center;
}

& body {
	padding: 0 2rem;
}
`;

// by default cloud pointing down. change arrowUp to true to change direction
export default function Cloud(props) {

	const { text, arrowUp, ...otherprops } = props;

	return (

		<CloudWrapper arrowUp={arrowUp}  {...otherprops}>
			{/* <div style={{color:'green'}}>
				{props.greentext}
			</div> */}
			<div>
				{text}
			</div>

		</CloudWrapper>
	)
}
