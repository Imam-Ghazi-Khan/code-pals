import CODEPALIMG from "../assets/codepalimg.png"

const CoderCard = () => {
  return (
       <div className="m-8 mt-12 cursor-pointer rounded-2xl shadow-md w-[280px]  bg-gray-900 text-white">
       <div className="relative">
         <img className="absolute -top-6 left-4 w-32 h-32 rounded-2xl object-cover" src={CODEPALIMG} alt="Profile" />
       </div>
       <div className="pt-28">
        <div className="bg-gradient-to-r from-violet-800 to-violet-500 ml-4 p-2 w-fit rounded-lg"> 
          <h4 className="text-xl font-bold">ReactJs</h4>
        </div>
         <h3 className="text-lg font-semibold pl-4 pt-4">Imam Ghazi Khan</h3>
         <h5 className="text-md text-yellow-500 pl-4 pt-4">⭐ 4.0 (2)</h5>
         <p className="pl-4 pt-4 text-gray-400">Android & Web developer</p>
         <p className="text-green-500 pl-4 pt-4 pb-4">Free</p>
       </div>
     </div>
  )
}

export default CoderCard;