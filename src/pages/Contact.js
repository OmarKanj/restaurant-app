import { Component } from "react";
import './Contact.css'

class ContactPage extends Component {

    render() {
        return (
            <div className="contact">
                <span className="contact-title">Contact Us</span>
                <div className="contact-info">
                    <div>E-mail:
                        <a href="mailto:thegardenmediterraneangrill@gmail.com">
                            thegardenmediterraneangrill@gmail.com
                        </a>
                    </div>
                    <div>Phone:
                        <a href="tel:9494213782">
                            9494213782
                        </a>
                    </div>
                </div>
                <GoogleMaps/>
            </div>
        )
    }
}

function GoogleMaps () {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.168947145623!2d-117.66380473112955!3d33.674358016610306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9e1c8a06459%3A0xce35df673ce46e46!2s41%20Auto%20Center%20Dr%2C%20Lake%20Forest%2C%20CA%2092610!5e0!3m2!1sen!2sus!4v1666593458650!5m2!1sen!2sus" 
            title="googlemaps"
            style={{
                border: 0,
                borderRadius: '2rem'
            }}
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default ContactPage;