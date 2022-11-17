import { Component } from "react";
import "./Order.css"
//import { images } from "../../components/images"

class OrderPage extends Component {
    render () {
        return (
            <div className="order">
                <iframe class="pickup-order" 
                src="https://bonappetittogo.app/ordering/ca/thegardengrilloc/index.php"
                title="order-for-pickup"
                allowfullscreen
                />
            </div>
        )
    }
}

export default OrderPage;

/*

                <a href="https://bonappetittogo.app/ordering/ca/thegardengrilloc/">
                <img src={images['pickup-order.png']} 
                alt="no-preview"
                className="order-button-pickup"/>
                </a>
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

*/