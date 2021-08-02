import React from "react"
import Layout from "../components/Layout"
import RecipesList from '../components/RecipesList'
import { graphql } from 'gatsby'
import SEO from "../components/SEO"

const Contact = ({data:{allContentfulRecipe: {nodes: recipes}}}) => {
  const submitForm = (e) => {
    e.preventDefault()
    alert('Thanks')
  }
  return (
    <Layout>
      <SEO title="Contact" />

      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo 
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, 
              raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className="form contact-form" onSubmit={submitForm}>
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input refs="name" type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input refs="email" type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Message</label>
                <textarea refs="message" name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}, node_locale: {eq: "en-US"}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact