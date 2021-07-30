import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Recipes Pages</h1>
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes