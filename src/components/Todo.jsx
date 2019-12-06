import React from 'react'

export default class Todo extends React.Component{
    state = {

    }

    
    render(){
        let style = {
            border: '1px solid red',
            width: '500px',
            margin: '10px auto',
            textAlign: 'left',
            padding: '20px'
        }
        return(
            <div style={style}>
                
                
                <h1>To Do:</h1>
                <ul>
                    <li><span>HTML</span> script</li>
                    <li><span>CSS</span> position, selectors</li>
                    <li><span>React-routing</span> match object</li>
                    <li><span>Server-express</span> static</li>
                    <li><span>Middleware</span> request level</li>
                    <li><span>DB</span> patterns - many to many, statements - subqueries</li>
                </ul>





            </div>
        )
    }
}