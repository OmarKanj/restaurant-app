import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MenuPage from './pages/Menu/Menu'
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar.js"

function App() {
    return (
    <Router>
        <div className="App">
        <Sidebar/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/menu' element={<Menu/>}/>
            <Route exact path='/contact' element={<Contact/>}/>
            <Route exact path='/order' element={<Order/>}/>
            <Route exact path='/about' element={<About/>}/>
        </Routes>
        </div>
    </Router>
    );
}

function Home () {
    return (
        <div className="App">
            Home
        </div>
    )
}

function Menu () {
    return (
        <div className="App">
            <MenuPage/>
        </div>
    )
}

function Contact () {
    return (
        <div className="App">
        </div>
    )
}

function Order () {
    return (
        <div className="App">
        </div>
    )
}

function About () {
    return (
        <div className="App">
        </div>
    )
}

export default App;
