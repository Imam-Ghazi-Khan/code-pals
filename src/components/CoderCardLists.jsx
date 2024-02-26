import CoderCard from "./CoderCard";
import coderInfos from "../mocks/coderInfos.json";

const CoderCardLists = () => {
  return (
    <>
      <h2 className="text-white">CodePals</h2>
      <div className="flex flex-wrap justify-center">
        {
          coderInfos &&
         coderInfos.map((coderInfo,index)=>(
          <CoderCard key={index} coderInfo={coderInfo}/>
         )) 
        }
      </div>
    </>
    // <div>{
    //     coders&&
    //     coders.map((codepal) =>  
    //       <ul key={codepal._id}>{codepal.login}</ul>
    //     )
    // }</div
  )
}

export default CoderCardLists;