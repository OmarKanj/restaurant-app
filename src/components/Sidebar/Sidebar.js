import React, {Component} from 'react'
import { Link } from "react-router-dom"
import {SidebarItems} from './SidebarData.js'
import './Sidebar.css'
import {images} from '../images'

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
                    <a href='/' className='sidebar-logo'>
                    <img src={images['main-logo.png']} alt={images['no-preview.png']} className='sidebar-logo'/>
                    </a>
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
                                <Link className={item.cName} to={item.href} onClick={this.handleClick}>
                                <i className={`${item.icon} sidebar-icon-settings`}></i>
                                {item.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Sidebar