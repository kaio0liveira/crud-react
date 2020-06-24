import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'
import UserCad from '../components/user/UserCad'


export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/cadastrar' component={UserCad} />
        <Redirect from='*' to='/' />
    </Switch>