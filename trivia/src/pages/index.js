import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Round from "../components/round"
import MultipleChoiceQuestion from '../components/multiple_choice_question'

function IndexPage() {

  return (
  <Layout>
    <div style={{ margin: `0 auto`, maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <SEO title="Hooley's Pub Ottawa" />
    <h1>292 Elgin St, Ottawa, ON K2P 1M3</h1>
    <h2>(613) 231-3888</h2>
    <h2>292elgin@gmail.com</h2>

    <hr />

    <form>
    <ol>
      <Round title="Multiple Choice" totalPoints={5} >
        <MultipleChoiceQuestion 
          options={[
            "First option",
            "Second options",
            "Third optioon"
          ]}
        >
          "According to the University of Oxford school of geography & environment, which vegan milk requires the least water to produce?"
        </MultipleChoiceQuestion>

        <MultipleChoiceQuestion 
          options={[
            "Second options",
            "Third optioon",
            "First option"
          ]}
        >
          "I don't know, I'm just testing more questions out."
        </MultipleChoiceQuestion>
      </Round>
    </ol>
    </form>
  </Layout>
);
}

export default IndexPage
