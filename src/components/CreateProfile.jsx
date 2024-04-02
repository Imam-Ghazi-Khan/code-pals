import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { auth, database, storage } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import {  ref as storageRef, getDownloadURL, uploadBytesResumable } from '@firebase/storage';

const CreateProfile = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState('');

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [price, setPrice] = useState('');
  const [github, setGithub] = useState('');
  const [website, setWebsite] = useState('');
  
  const handleSignOut = () => {
    signOut(auth)
      .then(()=>{
        navigate("/login");
        //don't worry about removing user from context api
        //onAuthStateChanged in UserContext is taking care of that 
      })
      .catch((error)=>{
        navigate("/error");
      })
  }
  
  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    if (image) {
      try {
        const storageReference = storageRef(storage, `images/${image.name}`);
        const uploadTask = uploadBytesResumable(storageReference, image);
  
        uploadTask.on('state_changed', null, console.error, () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
          });
        });    
      } catch (error) {
        console.log(error);    
      }
    }
  };

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
        image:imageUrl,
        userId: userId,
        title: title,
        name: name,
        age:parseInt(age),
        rating: 5.0,
        bio: bio,
        price: price,
        github:github,
        website:website,
        followers:null,
        following:null,
      });
    } catch (error) {
      console.error('Error:', error); // Log error if Firebase operation fails
    }

    // Reset form fields
    setImageUrl('');
    setName('');
    setAge('');
    setTitle('');
    setBio('');
    setGithub('');
    setWebsite('');
    navigate("/");
  };

  return (
    <div className="mt-40 p-4 md:mt-40 md:px-60 text-white">
      <div className=" px-10 py-4 bg-blue-950 bg-opacity-50 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
         
         <div className=''>
          <label className='block' htmlFor="upload image">Upload Your Display Picture:</label>
          <input className='bg-transparent border border-white rounded-md p-2 w-full' type="file" onChange={handleImageUpload} />
         </div>
          

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

        <button onClick={handleSignOut} className="my-4 py-2 px-4 bg-gradient-to-r from-violet-800 to-violet-500 text-white font-bold rounded-full">Logout</button>


      </div>
    </div>
  );
};

export default CreateProfile;
