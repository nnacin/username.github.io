import React from "react"
import { Link } from "gatsby"
import pusheenReading from '../images/pusheen-reading.jpg'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hola!</h1>
    <p>My name is Natali. I am a 27 year-old Croatian girl living in the sunny and warm Barcelona, 🇪🇸.
      By day, I am a frontend developer.
    </p>
    <p>In my free time I like reading books, watching movies & series, travelling.
      I have to admit I am also a  foodie.
    </p>
    <p>From time to time, I code and learn new things.
      Nice to meet you!
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {/* <img style={{ flex: 1, maxWidth: '50%' }} src={pusheenComputer} />
      <img style={{ flex: 1, maxWidth: '50%'}} src={pusheenEating} /> */}
      <img style={{ flex: 1, maxWidth: '50%' }} src={pusheenReading} />
    </div>
    <a href="https://github.com/nnacin">Github</a>
    <br />
    <a href="https://www.linkedin.com/in/natali-nacinovic/">LinkedIn</a>
  </Layout>
)

export default IndexPage
