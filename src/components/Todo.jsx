import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Italic = styled.li`
font-style: italic`

const Container = styled.div`
display: flex
justify-content: center`

const StyledLink = styled(Link)`
text-decoration: none
color: black
&:hover {
    text-decoration: underline
}`

export default class Todo extends React.Component {
    state = {

    }


    render() {
        let style = {
            border: '1px solid red',
            width: '500px',
            margin: '20px',
            textAlign: 'left',
            padding: '20px'
        }
        return (
            <Container>

                <div style={style}>


                    <h2>Basic Compentencies:</h2>
                    <ul>
                        <StyledLink to='/position'>
                            <li><span>CSS</span> position</li>
                        </StyledLink>
                        <StyledLink to='/matchobject/topics'>
                            <li><span>React-routing</span> match object</li>
                        </StyledLink>
                        <StyledLink to='/staticfiles'>
                            <li><span>Express</span> static</li>
                        </StyledLink>
                        <StyledLink to='/middleware'>
                            <li><span>Middleware</span> request level</li>
                        </StyledLink>
                        <li><span>DB</span> patterns - many to many, statements - subqueries</li>
                    </ul>
                </div>
                <div style={style}>
                    <div></div>
                    <h2>Compentencies in code:</h2>
                    <ul>
                        <Italic><span>HTML script tag:</span> Todo.jsx</Italic>
                        <Italic><span>CSS Selectors:</span> App.css</Italic>
                    </ul>
                </div>
                <div style={style}>
                    <h2>Bonus Compentencies:</h2>
                </div>
                <div style={style}>
                    <h2>5 level 7 katas??</h2>
                </div>
            </Container>
        )
    }
}