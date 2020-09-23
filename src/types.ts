import { Document } from '@contentful/rich-text-types'

export type ProfileData = {
  contentfulProfile: {
    profileImage: {
      description: string
      fluid: {
        srcSet: string
        src: string
      }
    }
    heading: string
    introduction: {
      introduction: string
    }
  }
}

export type ContentfulArticleStub = {
  title: string
  path: string
  createdAt: string
}

export type ContentfulArticle = {
  path: string
  title: string
  body: {
    json: Document
  }
}
