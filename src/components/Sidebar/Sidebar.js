import React, {Component} from 'react'
import {SidebarItems} from './SidebarData.js'
import './Sidebar.css'
//import {Link} from 'react-router-dom'
//import {Button} from '../Button.js'

class Sidebar extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <nav className='sidebar'>
                <h1 className='sidebar-logo'>
                    The Garden Mediterranean Grill
                </h1>
                <div className='sidebar-button-mobile'>
                    <div className='sidebar-button' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fa-solid fa-times':'fa-solid fa-bars'}></i>
                    </div>
                </div>
                <ul className={this.state.clicked ? 'sidebar-items active': 'sidebar-items'}>
                    {SidebarItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.href}>
                                <i className={`${item.icon} sidebar-icon-settings`}></i>
                                {item.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Sidebar