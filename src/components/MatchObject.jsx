import React from 'react'

const MatchObject = props => {
    console.log(props)
    return (
        <div>

            <h1>Match Object</h1>
            <p><span>props.match.path--> </span>{props.match.path}</p>
            <p><span>props.match.url--> </span>{props.match.url}</p>

        </div>
    )
}

export default MatchObject