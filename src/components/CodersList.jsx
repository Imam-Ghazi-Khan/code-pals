import useCodePalsList from "../hooks/useCodersList";

const CodersList = () => {
    const coders = useCodePalsList();
    console.log(coders);
  return (
    <div>{
        coders&&
        coders.map((codepal) =>  
          <ul key={codepal._id}>{codepal.login}</ul>
        )
    }</div>
  )
}

export default CodersList;