import React from "react"
import CodeDescriptionArea from "../../components/layouts/CodeDescriptionArea";
import OverviewDescriptionArea from "../../components/layouts/OverviewDescriptionArea";
import SampleComponentStructureArea from "../../components/layouts/SampleComponentStructureArea";

const SimpleAxiosPage: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default SimpleAxiosPage;
