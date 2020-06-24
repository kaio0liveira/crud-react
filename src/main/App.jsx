import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import Nav from '../components/template/Nav'
import Routes from './Routes'


export default props =>
    <HashRouter>
        <div className="app">
            
            <Nav />
            <Routes />
            <NotificationContainer />
            
        </div>
    </HashRouter>