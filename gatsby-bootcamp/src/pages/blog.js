import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ()=>{
    const blogData = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges {
                    node {
                    frontmatter {
                        title
                        date
                    }
                    html
                    }
                }
            }
        }
    `)

    const posts = blogData.allMarkdownRemark.edges;

    return (
    <div>
        <Layout>
        <h1>Blog posts</h1>
        <p>Posts</p>
        <ol>
            {posts.map(post => 
            <li>
                <b>{post.node.frontmatter.title}</b>
                <p>{post.node.frontmatter.date}</p>
            </li>)}
        </ol>
        </Layout>
    </div>    
    )
}

export default BlogPage