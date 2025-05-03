import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment data={comment} />
      <div className="pl-3 ml-3 md:pl-5 md:ml-5 border border-r-white border-t-white border-b-white">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
