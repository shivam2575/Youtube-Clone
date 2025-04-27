const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 shadow-sm bg-slate-100 rounded-lg mb-2">
      <img
        className="h-8 cursor-pointer"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
