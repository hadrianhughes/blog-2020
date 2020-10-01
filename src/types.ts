import { Document } from '@contentful/rich-text-types'

export type ProfileData = {
  contentfulProfile: {
    profileImage: {
      description: string
      resize: {
        src: string
      }
    }
    heading: string
    introduction: {
      introduction: string
    }
  }
}

export type Tag = {
  identifier: string
  name: string
}

export type ContentfulArticleStub = {
  title: string
  path: string
  createdAt: string
  tags: Tag[]
}

export type ContentfulArticle = {
  path: string
  title: string
  body: {
    json: Document
  }
}
