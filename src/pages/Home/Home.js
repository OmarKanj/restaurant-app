import { Component } from "react";
import { images } from "../../components/images";
import { Link } from "react-router-dom"
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div className="home">
                <ul className="home-buttons">
                    {homeButtons.map((item, index)=> {
                        return (
                            <Link className="home-button" to={item.href}>
                                {item.name}
                            </Link>
                        )
                    })}
                </ul>
                <a href="https://www.google.com/">
                    <img className="social-button" src={images['instagram-logo.png']} alt='no preview'></img>
                </a>
                <a href="https://www.google.com/">
                    <img className="social-button" src={images['facebook-logo.png']} alt='no preview'></img>
                </a>
                <div>
                    <img className='home-picture'src={images['home-pic1.jpg']} alt='no preview'></img>
                </div>
                <div>
                    <img className='home-sufra'src={images['sufra.png']} alt='no preview'></img>
                </div>
                <div className="home-picture-text">
                    "may your table always be plentiful" - A traditional syrian expression of gratitude
                </div>
            </div>
        )
    }
}

const homeButtons = [
    {
        name : 'Menu',
        href : '/menu'
    },
    {
        name : 'Contact us',
        href : '/contact'
    },
    {
        name : 'Order online',
        href : '/order'
    }
]

export default Home;