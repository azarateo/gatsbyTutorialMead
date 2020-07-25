import React from 'react'
import {Link} from 'gatsby'


const Header = ()=>{
    return (
    <div>
        <header>
            <h1>Edwin Alejandro Zarate Orjuela</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About me</Link></li>
                <li><Link to='/contact'>Contact me</Link></li>
                <li><Link to='/blog'>Blog</Link></li>

            </ul>
        </header>
    </div>    
    )
}

export default Header