import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Image from '../components/Image'
import Slider from '../components/Slider'
import MyGallery from '../components/MyGallery'

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
        <h1> What if Carbon Wasn't Invisible? </h1>
        <p> Remote sensing captures light from parts of the electromagnetic spectrum that humans 
          cannot see with the naked eye. By leveraging data collected from cutting-edge satellite sensors, 
          we use image filtering and machine learning techniques to quantify carbon. 
        </p> 
        <Slider />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Carbon Sequestration Opportunities</h2>
        <p> A key differentiator of ORCA is incorporating oceanic data from sensors submerged
           in water. Once satellite and subsurface data is aggregated, cloud-based machine
            learning models analyze images to quantify carbon concentrations and predict sequestration rates over time.
        </p> 
        <MyGallery />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h1> Built for Scale </h1>
        <p> Industry leading best methods of cloud computing are at the core of infrastructure.
            Earth Observation is an inherently massive source of data, our cloud partners help make daily 
            analysis possible
        </p> 
        <Image src={"https://asset-hosting.s3.us-west-2.amazonaws.com/ORCA+Process+Flow+Diagram.svg"} />
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
