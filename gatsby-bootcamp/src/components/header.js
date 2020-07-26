import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

const Header = ()=>{
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                author
                }
            }
        }
    `)
    return (
    <div>
        <header>
    <h1>{data.site.siteMetadata.title}</h1>
    <h2>{data.site.siteMetadata.author}</h2>

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