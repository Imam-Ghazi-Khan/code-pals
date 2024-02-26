import useCodersList from "../hooks/useCodersList";
import CoderCard from "./CoderCard";

const CoderCardLists = () => {
  
  const coders = useCodersList();
  console.log(coders);

  return (
    <div className="flex flex-wrap justify-center p-14 bg-gray-950">
      {
      Array.from({ length: 12 }).map((_, i) => (
          <CoderCard key={i} />
      ))
      }
    </div>
    // <div>{
    //     coders&&
    //     coders.map((codepal) =>  
    //       <ul key={codepal._id}>{codepal.login}</ul>
    //     )
    // }</div
  )
}

export default CoderCardLists;