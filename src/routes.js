import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './components/Todo'
import Position from './components/Position'
import MatchObject from './components/MatchObject'
import NoMatch from './views/NoMatch'

export default (
    <Switch>
        <Route exact path='/' component={Todo}/>
        <Route path='/position' component={Position}/>
        <Route path='/matchobject' component={MatchObject}/>
        <Route component={NoMatch} />
    </Switch>
)