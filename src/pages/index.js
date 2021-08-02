import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" description="This is the home page" />
      <main className="page">
        <header className="hero">
          <StaticImage placeholder="tracedSVG" src="../assets/images/main.jpeg" layout="fullWidth" alt="food" className="hero-img" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Home
