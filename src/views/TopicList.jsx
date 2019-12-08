import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopicList = ({ match }) => {
    // console.log(match)

    const Container = styled.div`
    display: flex
    justify-content: center`

    return (
        <Container>
            <h3>Topics:</h3>
            <ul>
                <li>
                    <Link to={`${match.url}/Topic1`}>Topic 1</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic2`}>Topic 2</Link>
                </li>
                <li>
                    <Link to={`${match.url}/Topic3`}>Topic 3</Link>
                </li>
            </ul>

        </Container>
    )
}

export default TopicList