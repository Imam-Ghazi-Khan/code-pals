const CoderDetailsCard = ({userData}) => {
  return (
    <div className="m-8 p-4 cursor-pointer rounded-2xl shadow-md bg-gray-900 md:w-2/5">
      <h1 className="p-2 font-bold">Details</h1>
      <div className="flex align-items justify-between">
      <div className="m-2 p-4 w-1/2 rounded-lg cursor-pointer shadow-md bg-gray-800">
        <p>Followers</p>
        <p className="font-bold text-2xl">{userData.followers}</p>
      </div>
      <div className="m-2 p-4 w-1/2 rounded-lg cursor-pointer shadow-md bg-gray-800">
        <p>Following</p>
        <p className="font-bold text-2xl">{userData.following}</p>
      </div>

      </div>
      <p className="p-2">Bio</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.bio}</p>
      </div>
      <p className="p-2">Interests</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.title}</p>
      </div>
      <p className="p-2">Github</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">{userData.github}</p>
      </div>
    </div>
  )
}

export default CoderDetailsCard