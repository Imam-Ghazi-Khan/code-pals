import { Link } from "react-router-dom";
import CYPHERIMG from "../assets/cypher.png"

const CoderCard = ({coderInfo}) => {

  const {image,userId,title,name,rating,projects,bio,price} = coderInfo;
  
  return (
    <Link to={`profile/${userId}`}>
        <div className="m-8 mt-12 cursor-pointer rounded-2xl shadow-md w-[280px] bg-gray-900 text-white">
       <div className="relative">
         <img className="absolute -top-6 left-4 w-32 h-32 rounded-2xl object-cover" src={image?image:CYPHERIMG} alt="Profile" />
       </div>
       <div className="pt-28">
        <div className="bg-gradient-to-r from-violet-800 to-violet-500 ml-4 p-2 w-fit rounded-lg"> 
          <h4 className="text-xl font-bold">{title}</h4>
        </div>
         <h3 className="text-lg font-semibold pl-4 pt-4">{name}</h3>
         <h5 className="text-md text-yellow-500 pl-4 pt-4">⭐ {rating} ({projects})</h5>
         <p className="pl-4 pt-4 text-gray-400">{bio}</p>
         <p className="text-green-500 pl-4 pt-4 pb-4">{price}</p>
       </div>
     </div>
    </Link>
  )
}

export default CoderCard;