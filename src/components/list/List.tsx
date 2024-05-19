import ChatList from "../chatList/ChatList";
import UserInfo from "../userInfo/UserInfo";
import "./list.css";
export default function List() {
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
    </div>
  );
}
