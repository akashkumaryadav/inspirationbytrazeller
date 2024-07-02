type RelatedPost = {
  title: string;
  date: string;
  image: string;
};

type ManageReadProps = {
  mangaPosts: RelatedPost[];
};

type BlogPostProps = {
  mainImage: string;
  mainTitle: string;
  mainDate: string;
  mainSummary: string;
  relatedPosts: RelatedPost[];
  mangaPosts: RelatedPost[];
  id?: string;
};
