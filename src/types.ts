export type ProfileData = {
  contentfulProfile: {
    profileImage: {
      description: string;
      resize: {
        src: string;
      };
    };
    heading: string;
    introduction: {
      introduction: string;
    };
  };
}

export type Tag = {
  identifier: string;
  name: string;
}

export type ContentfulArticleStub = {
  title: string;
  path: string;
  published: string;
  tags: Tag[];
}

export type ContentfulArticle = {
  path: string;
  title: string;
  description: {
    description: string;
  };
  content: {
    content: string;
  };
  tags: Tag[];
  published: string;
}

export type Dict<T> = {
  [key: string]: T;
}
