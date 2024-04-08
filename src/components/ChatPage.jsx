import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get, child, push, set } from 'firebase/database';
import { database } from '../utils/firebase';

const ChatPage = () => {
  const { userIds } = useParams();
  const [userId1, userId2] = userIds.split('_');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const [userName1,setUserName1] = useState("");
  const [userName2,setUserName2] = useState("");

  useEffect(() => {
    const setUserNames = async () => {
      const userName1Ref = await get(child(ref(database), `profiles/${userId1}/name/`));
      const userName2Ref = await get(child(ref(database), `profiles/${userId2}/name/`));

      setUserName1(userName1Ref._node.value_);
      setUserName2(userName2Ref._node.value_);
    }
    setUserNames();

    getChatData();
  }, []);

  const getChatData = async () => {
    try {
      // Get chats for userId1
      const userId1ChatsRef = child(ref(database), `profiles/${userId1}/chats/${userId2}/`);
      const userId1ChatsSnapshot = await get(userId1ChatsRef);

      const chatTemp = [];
      if (userId1ChatsSnapshot.exists()) {
        Object.values(userId1ChatsSnapshot.val()).forEach((chat) => {
          chatTemp.push(chat);
        });
      }

      // Sort chats by timestamp
      chatTemp.sort((a, b) => a.timestamp - b.timestamp);

      // Update state with combined chats
      setChats(chatTemp);
    } catch (error) {
      console.error('Error fetching chat data:', error);
    }
  };

  const sendMessage = async () => {
    try {
      await push(ref(database, `profiles/${userId1}/chats/${userId2}/`), {
        message: message,
        timestamp: new Date().getTime(),
        sender: userId1,
      });
      await push(ref(database, `profiles/${userId2}/chats/${userId1}/`), {
        message: message,
        timestamp: new Date().getTime(),
        sender: userId1,
      });
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
    getChatData();
  };

  return (
    <div className="md:mt-20 mt-28 text-white p-8 ">
      <div className='mx-8 md:mx-16 h-[70vh] overflow-scroll'>
        {
        chats.map((chat, index) => (
          <div key={index} className={chat.sender === userId1 ? 'text-left ' : 'text-right'}>
            <p className="text-gray-600">{chat.sender + ":"}</p>
            <p>{chat.message}</p>
          </div>
        ))
        }
      </div>

      <div className="flex justify-center fixed left-0 right-0 bottom-5">
        <input
          className="mt-4 bg-transparent border p-2 md:pr-[70%]"
          type="text"
          placeholder="Chat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-4 ml-2 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold py-2 px-4 rounded-full"
          type="button"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
