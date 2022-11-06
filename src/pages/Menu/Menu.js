import {Component} from "react";
import {MenuItems} from './MenuData.js';
import './Menu.css'


class MenuPage extends Component {
    render() {
        return (
            <div className="menu">
                <div className="submenu-title">Cold Appetizers</div>
                {getMenuByType('cold_appetizers', true)}
                <div className="submenu-title">Hot Appetizers</div>
                {getMenuByType('hot_appetizers', true)}
                <div className="submenu-title">Soups and Salads</div>
                {getMenuByType('soups_salads', true)}
                <div className="submenu-title">Entree</div>
                {getMenuByType('entree', true)}
                <div className="submenu-title">Individual Sides</div>
                {getMenuByType('sides', false)}
                <div className="submenu-title">The Garden Mediterranean</div>
                {getMenuByType('special', false)}
                <div className="submenu-title">Wraps</div>
                {getMenuByType('wraps', false)}
                <div className="submenu-title">Drinks</div>
                {getMenuByType('drinks', false)}
                <div className="submenu-title">Desserts</div>
                {getMenuByType('dessert', true)}
            </div>
        )
    }
}

function getMenuByType (type, showImages) {
    return (
        <div className="submenu-content">
            <ul className="submenu-content">
                {MenuItems[type].map((item, index) => {
                    return (
                        <li key={index} className="menu-item">
                                {showImages ? <img src={item.image} alt='no preview' className='item-image'></img> : <div></div>}
                                <i className={`${item.icon}`}></i>
                                <div className="menu-item-text">
                                    <span className="menu-item-name">{item.name}</span>
                                    <span className="menu-item-desc">{item.desc}</span>
                                    <span className="menu-item-price">{item.price}</span>
                                </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MenuPage;