import { COMMENTS } from "../utils/constants";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="m-3 p-1 md:m-5 md:p-2 md:w-[1000px]">
      <h1 className="font-bold text-xl md:text-2xl">Comments:</h1>
      <CommentsList comments={COMMENTS} />
    </div>
  );
};
export default CommentsContainer;
