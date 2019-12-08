import React from 'react'
import styled from 'styled-components'

const StaticFiles = () => {
    const A = styled.a`
    font-size: 2rem`
    return (
        <div>
            <h1>Express - Static Files</h1>

            <A href='http://localhost:4002/Cat.jpg' target='_blank' rel='nooperner noreferrer'>Cat</A>

        </div>
    )
}

export default StaticFiles