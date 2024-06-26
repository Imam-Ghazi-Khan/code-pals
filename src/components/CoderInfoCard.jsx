const CoderInfoCard = ({userData}) => {
  return (
    <div className="m-8 p-4 cursor-pointer rounded-2xl shadow-md bg-gray-900 md:w-1/5">
      <p className="p-2">Information</p>
      <div className="m-2 p-4 rounded-lg cursor-pointer shadow-md bg-gray-800 flex items-center justify-center h-5/6">
        {!userData&&<p className="text-gray-400">No infos yet</p>}
        <p>Rated {userData.rating} ⭐</p>
      </div>
    </div>
  )
}

export default CoderInfoCard;