import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import MyGallery from '../components/MyGallery'

import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (

  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1> Built for Scale </h1>
        <p> Cutting-edge <strong>cloud computing</strong> practices are at the core of our infrastructure.
            Earth Observation is an inherently <strong>massive source of data</strong>, cloud providers provide us with
            the tools necessary to make this analysis possible.
        </p> 
        <img src={"https://asset-hosting.s3.us-west-2.amazonaws.com/website-cloud-arch.png"} className="centeredImage" alt="alt text" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Carbon Sequestration. From Space.</h2>
        <p> Our key a focus is to help scale Blue Carbon solutions such as <strong>Seaweed Farming </strong>
            and <strong> Coastal Carbon Capture</strong>. Satellite and Ocean sensor data is combined 
            to paint a picture of the ocean's biogeochemical cycle.
        </p> 
        <MyGallery />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1> What if Carbon Wasn't Invisible? </h1>
        <p> <strong>Remote Sensing</strong> captures light from parts of the <strong>electromagnetic</strong> spectrum that the human 
          eye cannot see. By using image filtering techniques, we quantify and predict levels of carbon and other harmful greenhouse gases. 
        </p> 
        <img src={"https://asset-hosting.s3.us-west-2.amazonaws.com/remote-sensing-exp.png"} className="centeredImage" alt="alt text" />
      </div>
    </section> 

    <section className="section">
      <div className="container">
        <h1> Accurately Quantify Sequestration Efforts </h1>
        <p> Our interactive dashboards allow users to <strong>select an area of interest</strong> and timeframe 
            to generate <strong>accurate, scalable</strong> reporting related to carbon concentrations over time.
        </p> 
        <img className="centeredImage" src={"https://asset-hosting.s3.us-west-2.amazonaws.com/ipad.gif"} alt="alt text"/>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
