import {Component} from "react";
import {MenuItems} from './MenuData.js';
import './Menu.css'


class MenuPage extends Component {
    /*
        Need to think of a way to categorize 
        such as:
            - Appetizers
            - Lunch
            - Dinner
            - Drinks
    */
    render() {
        return (
            <ul>
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <div className={item.cName}>
                            <img src={item.image} alt={item.alt} className='item-image'></img>
                            <i className={`${item.icon}`}></i>
                            {item.name}
                        </div>
                    </li>
                )
            })}
            </ul>

        )
    }
}

export default MenuPage;