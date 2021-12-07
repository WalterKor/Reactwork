import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    font-size: 15rem;
    border: 1px solid black;
    background-color: blue;
`;

function Footer() {
    return (
        <div>
            <Foot>Hello</Foot>
        </div>
    )
}

export default Footer

