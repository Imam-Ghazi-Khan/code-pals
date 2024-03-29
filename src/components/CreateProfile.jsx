


import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { database } from '../utils/firebase';

const CreateProfile = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [projects, setProjects] = useState('');
  const [bio, setBio] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login'); // Redirect to login page if user is not logged in
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      return; // Do nothing if user is not logged in
    }

    const userId = user?.firebaseUser?.uid; // Check if user is logged in before accessing uid
    if (!userId) {
      console.error('User is not logged in.'); // Log error if user is not logged in
      return;
    }

    try {
      await set(ref(database, 'profiles/' + userId), {
        userId: userId,
        title: title,
        name: name,
        rating: parseFloat(rating),
        projects: parseFloat(projects),
        bio: bio,
        price: price
      });
    } catch (error) {
      console.error('Error:', error); // Log error if Firebase operation fails
    }

    // Reset form fields
    setName('');
    setTitle('');
    setRating('');
    setProjects('');
    setBio('');
    setPrice('');
  };

  return (
    <div className=" mt-40 px-60 text-white">
      <div className=" px-10 py-4 bg-blue-950 bg-opacity-50 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
             <div>
                <label htmlFor="title" className="block text-white">Primary Skill:</label>
                <input placeholder='Jetpack Compose' id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
            </div>
             
                       <div>
                         <label htmlFor="name" className="block text-white">Name:</label>
                         <input placeholder='Jason Mamoa' id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
                       </div>
                       
                       <div>
                         <label htmlFor="rating" className="block text-white">Rating:</label>
                         <input placeholder='4' id="rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
                       </div>
                       
                       <div>
                         <label htmlFor="projects" className="block text-white">Projects:</label>
                         <input placeholder='2' id="projects" type="number" value={projects} onChange={(e) => setProjects(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
                       </div>
                       
                       <div>
                       <label htmlFor="bio" className="block text-white">Bio:</label>
                       <input placeholder='Aspiring Web Developer' id="bio" type="text" value={bio} onChange={(e) => setBio(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
                       </div>
             
                       
                       <div>
                         <label htmlFor="price" className="block text-white">Price:</label>
                         <input placeholder='Free' id="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
                       </div>
                       
                       <button type="submit" className="my-4 py-2 px-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold rounded-full">Create Profile</button>
              
          
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;