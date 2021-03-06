import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="All Recipes" />

      <main className="page">
        <h1>Recipes Pages</h1>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes