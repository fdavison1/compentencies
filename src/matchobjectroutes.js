import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TopicList from './views/TopicList'
import TopicDetail from './components/TopicDetail'

export const MatchRoutes = () => {
    return (
        <div>
        <Switch>
            <Route exact path='/matchobject/topics' component={TopicList}/>
            <Route path='/matchobject/topics/:topicID' component={TopicDetail} />
        </Switch>
        </div>
    )
}