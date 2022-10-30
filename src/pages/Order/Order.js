import { Component } from "react";
import "./Order.css"
import { images } from "../../components/images"

class OrderPage extends Component {
    render () {
        return (
            <div className="order">
                <a href="https://www.google.com/">
                <img src={images['button-doordash.png']} 
                alt="no-preview"
                className="order-button"/>
                </a>
                <a href="https://www.google.com/">
                <img src={images['button-ubereats.png']} 
                alt="no-preview"
                className="order-button"/>
                </a>
            </div>
        )
    }
}

export default OrderPage;