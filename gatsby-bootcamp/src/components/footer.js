import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'


const Footer = ()=>{
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
        <footer>
    <p>Created by {data.site.siteMetadata.author}, ©2020</p>
        </footer>
    </div>    
    )
}

export default Footer