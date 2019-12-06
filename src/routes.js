import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './components/Todo'
import Position from './components/Position'
import MatchObject from './components/MatchObject'

export default (
    <Switch>
        <Route exact path='/' component={Todo}/>
        <Route path='/position' component={Position}/>
        <Route path='/matchobject' component={MatchObject}/>
    </Switch>
)