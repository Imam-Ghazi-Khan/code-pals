import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get, child, push, set } from 'firebase/database';
import { database } from '../utils/firebase';

const ChatPage = () => {
  const { userIds } = useParams();
  const [userId1, userId2] = userIds.split('_');
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
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
      // Push new message to both userId1 and userId2's chats
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
    <div className="md:mt-20 mt-28 text-white p-8">
      <div>
        {chats.map((chat, index) => (
            <div key={index}>
              <p className="text-white"><span className='text-gray-600'>{chat.sender + " : "}</span>{chat.message}</p>
            </div>
            )
          )}
      </div>

      <div className="flex justify-center absolute left-0 right-0 bottom-5">
        <input
          className="mt-4 bg-transparent border p-2 md:pr-[50%]"
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
