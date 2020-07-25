import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout'


const About = ()=>{
    return (
    <div>
        <Layout>
        <h1>About page</h1>
        <p>I am Edwin Alejandro Zarate Orjuela</p>
        <p>I am a software developer</p>
        <p>If you want to contact me just check my <Link to="/contact"> contact page</Link></p>
        </Layout>
    </div>    
    )
}

export default About