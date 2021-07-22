import React from 'react'

interface Props {
  sample?: string
}

const CodeDescriptionArea: React.FC<Props> = ({ sample }) => {
  return (
    <>
      {sample}
      CodeDescriptionArea
    </>
  )
}

export default CodeDescriptionArea
