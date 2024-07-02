type RelatedPost = {
  title: string;
  date: string;
  image: string;
};

type ManageReadProps = {
  relatedPosts: RelatedPost[];
};

type BlogPostProps = {
  mainImage: string;
  mainTitle: string;
  mainDate: string;
  mainSummary: string;
  relatedPosts: RelatedPost[];
  id?: string;
};
