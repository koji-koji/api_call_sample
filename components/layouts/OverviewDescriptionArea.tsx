import React from "react"
import PageTitleParts from "../parts/PageTitleParts"

interface Props {
  title?: string
  descriptionComponent?: React.FC | string
}

const OverviewDescriptionArea: React.FC<Props> = ({title = '', descriptionComponent}) => {
  return (
    <>
      <PageTitleParts title={title}/>
      {descriptionComponent}
    </>
  )
}

export default OverviewDescriptionArea