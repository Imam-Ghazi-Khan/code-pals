import CoderCard from "./CoderCard";
import coderInfos from "../mocks/coderInfos.json";

const CoderCardLists = () => {
  return (
    <div className="mt-32">

      {/* All CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">CodePals</p>
      <div className="flex overflow-x-scroll">
      <div className="flex ">
        {
          coderInfos &&
         coderInfos.map((coderInfo,index)=>(
          <CoderCard key={index} coderInfo={coderInfo}/>
         )) 
        }
      </div>
      </div>


      {/* Free CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">FreePals</p>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {
            coderInfos && 
          coderInfos.map((coderInfo,index)=>(
            coderInfo.price=="Free" &&
            <CoderCard key={index} coderInfo={coderInfo}/>
          )) 
          }
        </div>
      </div>

      {/* Paid CodePals */}
      <p className="ml-10 text-2xl text-white font-bold">PaidPals</p>
      <div className="flex overflow-x-scroll">
      <div className="flex justify-center">
        {
          coderInfos && 
         coderInfos.map((coderInfo,index)=>(
          coderInfo.price!=="Free" &&
          <CoderCard key={index} coderInfo={coderInfo}/>
         )) 
        }
      </div>
      </div>

    </div>
  )
}

export default CoderCardLists;