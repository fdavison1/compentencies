import React from 'react'
import styled from 'styled-components'

const FlexParent = styled.div`
display:flex
justify-content: center`

const Div = styled.div`
border: 1px solid black
height: 100px
margin: 25px
padding: 25px
background: lightgray`

const Button = styled.button`
font-size: 3rem
border-radius: 5px
margin: 5px`

const Button2 = styled.button`
font-size: 1.5rem
border-radius: 5px
margin: 5px`

export default class Middleware extends React.Component {
    state = {
        isAdmin: false,
        buttonColor: 'white'
    }

    isAdmin(){
        this.setState({
            isAdmin: true,
            buttonColor: 'yes'
        })
    }

    isNotAdmin(){
        this.setState({
            isAdmin: false,
            buttonColor: 'no'
        })
    }

    render() {

        return (
            <div>
                <h1>Request-Level Middleware</h1>
                <FlexParent>
                    <Div>
                        <h2>Are you an Admin?</h2>
                        <Button
                        className={this.state.buttonColor}
                        onClick={()=> this.isAdmin()}
                        >Yes</Button>
                        <Button
                        className={(this.state.buttonColor === 'yes') ? 'no' : 'yes'}
                        onClick={()=> this.isNotAdmin()}
                        >No</Button>
                    </Div>
                    <Div>
                        <Button2>View Admin Treasure</Button2>
                    </Div>
                </FlexParent>
            </div>
        )
    }
}
