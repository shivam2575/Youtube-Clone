import { COMMENTS } from "../utils/constants";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={COMMENTS} />
    </div>
  );
};
export default CommentsContainer;
