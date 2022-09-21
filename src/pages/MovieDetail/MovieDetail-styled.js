import styled from 'styled-components';

import {
    NavLink
}

from 'react-router-dom';

export const LinkBack=styled(NavLink)` color: black;
font-size: 20px;
font-weight: 500;
margin-botton: 15px;

&:focus,
&:hover {
    color: red;
}

`;

export const Conteiner=styled.div` display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
margin-bottom: 15px;
margin-top: 15px;
border-bottom: 1px solid black;
`;

export const ConteinerInfo=styled.div` padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
`;

export const Img=styled.img` width: 300px;
`;

export const Score=styled.span` margin-left: 10px;
`;

export const List=styled.ul` display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
border-bottom: 1px solid black;
font-size: 18px;
padding-bottom: 15px;
`;