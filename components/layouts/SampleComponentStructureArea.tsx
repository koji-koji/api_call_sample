import React from 'react'

interface Props {
  sample?: string
}

const SampleComponentStructureArea: React.FC<Props> = ({ sample }) => {
  return (
    <>
      {sample}
      SampleComponentStructureArea
    </>
  )
}

export default SampleComponentStructureArea
