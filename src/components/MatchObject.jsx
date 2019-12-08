import React from 'react'
import styled from 'styled-components'
import { MatchRoutes } from '../matchobjectroutes'

const MatchObject = props => {
    // console.log(props)
    const Example = styled.p`
    color: red
    font-weight: bold
    font-style: italic
    font-size: 1.1rem`

    return (
        <div>
            <h1>Match Object</h1>
            <p><span>params </span>(object), key/value pairs parsed from the URL corresponding to the dynamic segmants of the path</p>
            <Example>no params</Example>

            <p><span>path </span>(string), path pattern used to match</p>
            <Example>{props.match.path}</Example>
        
            <p><span>url </span>(string), matched portion of the URL</p>
            <Example>{props.match.url}</Example>

            <p><span>isExact </span>(boolean), true if the entire URL was matched (no trailing characters)</p>
            <Example>true</Example>


            <hr/>

            <MatchRoutes />
        </div>
    )
}

export default MatchObject