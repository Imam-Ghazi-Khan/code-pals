import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { userIds } = useParams(); 
  const [userId1, userId2] = userIds.split('_'); 
  
  
  return (
    <div className='mt-60 text-white'>
      <h2>Chat Page</h2>
      <p>User ID 1: {userId1}</p>
      <p>User ID 2: {userId2}</p>
    </div>
  );
}

export default ChatPage;
