import { useParams } from "@remix-run/react";

type Props = {};

const PostDetail = (props: Props) => {
  const { postID } = useParams();
  return <div>Post detail - {postID}</div>;
};

export default PostDetail;
