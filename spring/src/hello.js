import React from 'react'
import styled from 'styled-components'

const Hello = styled.div`
    color: red;
    background-color: midnightblue;
`;

function hello() {
    return (
        <div>
            <Hello>안녕</Hello>
        </div>
    )
}

export default hello
