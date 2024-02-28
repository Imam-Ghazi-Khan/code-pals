const CoderDetailsCard = () => {
  return (
    <div className="m-8 p-4 cursor-pointer rounded-2xl shadow-md bg-gray-900 md:w-2/5">
      <h1 className="p-2 font-bold">Details</h1>
      <div className="flex align-items justify-between">
      <div className="m-2 p-4 w-1/3 rounded-lg cursor-pointer shadow-md bg-gray-800">
        <p>Followers</p>
        <p className="font-bold text-2xl">0</p>
      </div>
      <div className="m-2 p-4 w-1/3 rounded-lg cursor-pointer shadow-md bg-gray-800">
        <p>Following</p>
        <p className="font-bold text-2xl">0</p>
      </div>
      <div className="m-2 w-1/3 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800">
        <p>Ratings</p>
        <p className="font-bold text-2xl">0</p>
      </div>
      </div>
      <p className="p-2">Bio</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">No bios yet</p>
      </div>
      <p className="p-2">Interests</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">No Interests yet</p>
      </div>
      <p className="p-2">Social Media</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex justify-center">
        <p className="text-gray-400">No links yet</p>
      </div>
    </div>
  )
}

export default CoderDetailsCard