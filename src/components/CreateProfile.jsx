


import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { database } from '../utils/firebase';

const CreateProfile = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [title, setTitle] = useState('');
  const [projects, setProjects] = useState('');
  const [bio, setBio] = useState('');
  const [price, setPrice] = useState('');
  const [github, setGithub] = useState('');
  const [website, setWebsite] = useState('');
  



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
        age:parseInt(age),
        rating: 5.0,
        projects: parseFloat(projects),
        bio: bio,
        price: price,
        github:github,
        website:website,
        followers:0,
        following:0,
      });
    } catch (error) {
      console.error('Error:', error); // Log error if Firebase operation fails
    }

    // Reset form fields
    setName('');
    setAge('');
    setTitle('');
    setProjects('');
    setBio('');
    setPrice('');
    setGithub('');
    setWebsite('');
  };

  return (
    <div className=" mt-40 px-60 text-white">
      <div className=" px-10 py-4 bg-blue-950 bg-opacity-50 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
             
            <div>
              <label htmlFor="name" className="block text-white">Name:</label>
              <input placeholder='Jason Mamoa' id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-white">Age:</label>
              <input placeholder='22' type="number" value={age} onChange={(e) => setAge(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
            </div>
            
             <div>
                <label htmlFor="title" className="block text-white">Primary Skill:</label>
                <input placeholder='Jetpack Compose' id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
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

              <div>
              <label htmlFor="github" className="block text-white">Github:</label>
              <input placeholder='Github Id' id="github" type="text" value={github} onChange={(e) => setGithub(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
              </div>
    
              <div>
              <label htmlFor="website" className="block text-white">Website:</label>
              <input placeholder='WebsiteLink' id="website" type="text" value={website} onChange={(e) => setWebsite(e.target.value)} required className="bg-transparent border border-white rounded-md p-2 w-full" />
              </div>
    
              
              <button type="submit" className="my-4 py-2 px-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold rounded-full">Create Profile</button>
    
          
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;