import React from 'react'
import styled from 'styled-components'

const BoxField = styled.div`
border: 1px solid black
width: 1000px
margin: 0 auto
padding: 20px
display: flex
justify-content: space-evenly`

const BoxContainer = styled.div`
border: 1px solid black
margin: 10px
height: 200px
width: 200px`

const Box = styled.div`
border: 1px solid black
height: 100px
width: 100px`

const Italic = styled.p`
font-style: italic`

export default class Basic extends React.Component {
    state = {}

    render() {
        return (
            <div>

                Basic.jsx
                <h2>HTML: script</h2>
                <Italic>used to style To Do box (Todo.jsx)</Italic>

                <h2>CSS: position</h2>
                <BoxField>
                    <h4>Position: Relative</h4>
                    <BoxContainer>
                        <Box id='box1'></Box>
                    </BoxContainer>
                    <h4>Position: Absolute</h4>
                    <BoxContainer>
                        <Box id='box2'></Box>
                    </BoxContainer>
                    <h4>Position: Fixed</h4>
                    <BoxContainer>
                        <Box id='box3'></Box>
                    </BoxContainer>
                </BoxField>

            </div>
        )
    }
}