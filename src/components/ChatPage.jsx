import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get, push } from 'firebase/database';
import { database } from '../utils/firebase';

const ChatPage = () => {
  const { userIds } = useParams();
  const [userId1, userId2] = userIds.split('_');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [userName1, setUserName1] = useState("");
  const [userName2, setUserName2] = useState("");

  useEffect(() => {
    const setUserNames = async () => {
      const user1 = (await get(ref(database, `profiles/${userId1}/`))).val();
      const user2 = (await get(ref(database, `profiles/${userId2}/`))).val();
      setUserName1(user1.name);
      setUserName2(user2.name);
    }
    setUserNames();

    getChatData();
  }, []);

  const getChatData = async () => {
    try {
      // Get chats for userId1
      const userId1ChatsRef = ref(database, `profiles/${userId1}/chats/${userId2}/`);
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
      const timestamp = new Date().getTime();
      await push(ref(database, `profiles/${userId1}/chats/${userId2}/`), {
        message: message,
        timestamp: timestamp,
        sender: userId1,
      });
      await push(ref(database, `profiles/${userId2}/chats/${userId1}/`), {
        message: message,
        timestamp: timestamp,
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
      <div className='mx-8 md:mx-16 h-[70vh] overflow-scroll pr-4'>
        {chats.map((chat, index) => (
          <div key={index} className={`flex justify-${chat.sender === userId1 ? 'start' : 'end'}`}>
            <div className={`max-w-[70%] p-2 bg-gradient-to-r from-violet-800 to-violet-600 rounded-lg mb-2 ${chat.sender === userId1 ? 'mr-auto' : 'ml-auto'}`}>
              <p className="text-green-400">{chat.sender === userId1 ? userName1 : userName2}</p>
              <p className='break-words'>{chat.message}</p>
            </div>
          </div>
        ))}
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
