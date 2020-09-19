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
