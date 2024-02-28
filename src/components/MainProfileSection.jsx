import ProfileIcon from "../assets/cypher.png"

const MainProfileSection = () => {
  return (
    <div className="text-white w-full p-36 bg-gradient-to-b from-violet-500 to-black relative">
      <div className="absolute flex align-middle top-20 left-12">
      <img className="md:w-32 w-28 rounded-full" src={ProfileIcon} alt="" />     
      <div className="p-4">
        <h1 className="md:text-4xl text-2xl font-bold">The Watcher</h1>
        <div className="flex align-middle py-2">
          <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30 mx-2">♂️ 22</div>
          <div className="px-2 py-1 rounded-md bg-gray-500 bg-opacity-30">🟢 Online</div>
        </div>
      </div>
      </div>
      {/* Bunch of profile cards here */}
    </div>
    )
}

export default MainProfileSection;