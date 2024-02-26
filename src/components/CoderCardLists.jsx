import useCodersList from "../hooks/useCodersList";
import CODEPALIMG from "../assets/codepalimg.png"

const CoderCardLists = () => {
    const coders = useCodersList();
    console.log(coders);
  return (
    // <div>{
    //     coders&&
    //     coders.map((codepal) =>  
    //       <ul key={codepal._id}>{codepal.login}</ul>
    //     )
    // }</div>
    <div className="p-20">
       <div className="bg-gray-100 rounded-md shadow-md w-[280px] h-[340px]">
       <div className="relative">
         <img className="absolute -top-6 left-4 w-32 h-32 rounded-lg object-cover" src={CODEPALIMG} alt="Profile" />
       </div>
       <div className="pt-28">
         <h4 className="text-xl font-bold pl-4 pt-4">ReactJs,Jetpack Compose</h4>
         <h3 className="text-lg font-semibold pl-4 pt-4">Imam Ghazi Khan</h3>
         <h5 className="text-md text-yellow-500 pl-4 pt-4">⭐ 4.0 (2)</h5>
         <p className="text-gray-700 pl-4 pt-4">Android & Web developer</p>
         <p className="text-green-500 pl-4 pt-4">Free</p>
       </div>
     </div>
    </div>
  )
}

export default CoderCardLists;