import CoderBadgesCard from "./CoderBadgesCard"
import CoderDetailsCard from "./CoderDetailsCard"
import CoderInfoCard from "./CoderInfoCard"

const SecondaryProfileSection = () => {
  return (
    <div className="text-white flex justify-center flex-wrap">
        <CoderInfoCard/>
        <CoderDetailsCard/>
        <CoderBadgesCard/>
    </div>
  )
}

export default SecondaryProfileSection