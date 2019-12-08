import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopicDetail = ({ match }) => {
    // console.log(match)

    const Container = styled.div`
    display: flex
    justify-content: center`

    return (
        <Container>
            <h3>{match.params.topicID}</h3>
            <ul>
                <li>
                    <Link to='/matchobject/topics'>Back to Topics</Link>
                </li>
            </ul>
        </Container>
    )
}

export default TopicDetail