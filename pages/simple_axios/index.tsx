import React, { useState, useEffect } from "react"
import CodeDescriptionArea from "../../components/layouts/CodeDescriptionArea";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import OverviewDescriptionArea from "../../components/layouts/OverviewDescriptionArea";
import SampleComponentStructureArea from "../../components/layouts/SampleComponentStructureArea";

const SimpleAxiosPage: React.FC = () => {

  return (
    <>
      <Header>
        <section>
          <OverviewDescriptionArea 
            title="simple axios"
            descriptionComponent="testtesttesttesttesttesttesttesttesttest" 
          />
        </section>
        <section>
          <CodeDescriptionArea />
        </section>
        <section>
          <SampleComponentStructureArea />
        </section>
        <Footer />
      </ Header>
    </>
  )
}

export default SimpleAxiosPage;
