import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './components/Todo'
import Position from './components/Position'

export default (
    <Switch>
        <Route exact path='/' component={Todo}/>
        <Route path='/position' component={Position}/>
    </Switch>
)