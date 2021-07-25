import React, { useState, useEffect } from 'react'
import CodeDescriptionArea from '../../components/layouts/CodeDescriptionArea'
import Footer from '../../components/layouts/Footer'
import Header from '../../components/layouts/Header'
import OverviewDescriptionArea from '../../components/layouts/OverviewDescriptionArea'
import SampleComponentStructureArea from '../../components/layouts/SampleComponentStructureArea'
import { Sample } from '../../services/api/SampleAxiosApi'

const SimpleAxiosPage: React.FC = () => {
  const [sample] = useState<Sample>({})
  console.log(sample)

  useEffect(() => {
    ;(async () => {
      // TODO: api側を実装後にコメントアウト解除。
      // const response = await fetchSamples({})
      // setSample(response ?? {})
    })()
  }, [])

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
      </Header>
    </>
  )
}

export default SimpleAxiosPage
