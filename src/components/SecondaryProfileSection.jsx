import CoderBadgesCard from "./CoderBadgesCard"
import CoderDetailsCard from "./CoderDetailsCard"
import CoderInfoCard from "./CoderInfoCard"

const SecondaryProfileSection = ({userData}) => {

  return (
    <div className="text-white md:flex justify-center flex-wrap">
        <CoderInfoCard userData={userData}/>
        <CoderDetailsCard userData={userData}/>
        <CoderBadgesCard/>
    </div>
  )
}

export default SecondaryProfileSection