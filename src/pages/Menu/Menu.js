import {Component} from "react";
import {MenuItems} from './MenuData.js';
import './Menu.css'


class MenuPage extends Component {
    render() {
        return (
            <div className="menu">
                <span className="submenu-title">Cold Appetizers</span>
                {getMenuByType('cold_appetizers')}
                <span className="submenu-title">Soups and Salads</span>
                {getMenuByType('soups_salads')}
                <span className="submenu-title">Hot Appetizers</span>
                {getMenuByType('hot_appetizers')}
                <span className="submenu-title">Entree</span>
                {getMenuByType('entree')}
                <span className="submenu-title">Individual Sides</span>
                {getMenuByType('sides')}
                <span className="submenu-title">The Garden Mediterranean</span>
                {getMenuByType('special')}
                <span className="submenu-title">Desserts</span>
                {getMenuByType('cold_appetizers')}
            </div>
        )
    }
}

function getMenuByType (type) {
    return (
        <ul>
            {MenuItems[type].map((item, index) => {
                return (
                    <li key={index} className="menu-item">
                        <div className={item.cName}>
                            <img src={item.image} alt='no preview' className='item-image'></img>
                            <i className={`${item.icon}`}></i>
                            <div className="menu-item-text">
                                <span className="menu-item-name">{item.name}</span>
                                <span className="menu-item-desc">{item.desc}</span>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default MenuPage;