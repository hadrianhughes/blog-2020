import React, { FunctionComponent } from 'react'
import { Document } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface ArticleBodyProps {
  data: Document
}

const ArticleBody: FunctionComponent<ArticleBodyProps> = ({ data }) => (
  <section>
    {documentToReactComponents(data)}
  </section>
)

export default ArticleBody
