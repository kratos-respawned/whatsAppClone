import { useRef } from "react";

const Message = ({ data }) => {
  let classes = useRef("chat__message");

  return (
    <p
      key={data._id}
      className={`chat__message ${data.received && "chat__receiver"}`}
    >
      <span className="chat__name">{data.name}</span>
      {data.message}
      <span className="chat__timestamp">{data.time}</span>
    </p>
  );
};
export default Message;
