import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FlexParent = styled.div`
display:flex
justify-content: center`

const Div = styled.div`
border: 1px solid black
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

const Lock = styled.img`
height: 100px`

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

    getTreasure(){
        // const admin = this.state.isAdmin
        axios.post('/api/treasure', [this.state.isAdmin])
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
                        <Button2
                        onClick={()=> this.getTreasure()}
                        >View Admin Treasure</Button2>
                        <br/>
                        <Lock src="http://simpleicon.com/dev/wp-content/uploads/lock-10.png" alt="outline of padlock"/>
                    </Div>
                </FlexParent>
            </div>
        )
    }
}