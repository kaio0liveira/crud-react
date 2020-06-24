import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default props =>

    <nav className='menu-area'>
        
        <nav className="menu">
            <NavItem path='/' icon='home' name='Início' />
            <NavItem path='/users' icon='users' name='Usuários' />
            <NavItem path='/cadastrar' icon='users' name='Cadastrar' />
           
        </nav>
    </nav>