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
                    <li className='done'><span>HTML</span> script</li>
                    <li><mark><span>CSS</span> position</mark></li>
                    <li><span>CSS</span> selectors</li>
                    <li><span>React-routing</span> match object</li>
                    <li><span>Server-express</span> static</li>
                    <li><span>Middleware</span> request level</li>
                    <li><span>DB</span> patterns - many to many, statements - subqueries</li>
                </ul>
                <h2>5 extra compentencies?</h2>
                <h2>5 level 7 katas??</h2>





            </div>
        )
    }
}