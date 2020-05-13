import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>In my free time I like reading books, watching movies & series.</p>
    <p>Eating. (put pusheen pictures)</p>
    <p>From time to time I code and leran new things</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="https://github.com/nnacin">Github</a>
    <br />
    <a href="https://www.linkedin.com/in/natali-nacinovic/">LinkedIn</a>
  </Layout>
)

export default IndexPage
