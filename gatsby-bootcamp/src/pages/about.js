import React from 'react';
import Header from '/components/header'
import {Link} from 'gatsby'

const About = ()=>{
    return (
    <div>
          <Header />
        <h1>About page</h1>
        <p>I am Edwin Alejandro Zarate Orjuela</p>
        <p>I am a software developer</p>
        <p>If you want to contact me just check my <Link to="/contact"> contact page</Link></p>
    </div>    
    )
}

export default About