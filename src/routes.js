import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './components/Todo'
import Position from './components/Position'
import MatchObject from './components/MatchObject'
import NoMatch from './views/NoMatch'
import StaticFiles from './components/StaticFiles'
import Middleware from './components/Middleware'

export default (
    <Switch>
        <Route exact path='/' component={Todo}/>
        <Route path='/position' component={Position}/>
        <Route path='/matchobject' component={MatchObject}/>
        <Route path='/staticfiles' component={StaticFiles} />
        <Route path='/middleware' component={Middleware} />
        <Route component={NoMatch} />
    </Switch>
)