import CoderBadgesCard from "./CoderBadgesCard"
import CoderDetailsCard from "./CoderDetailsCard"
import CoderInfoCard from "./CoderInfoCard"

const SecondaryProfileSection = ({userData,plzReRender}) => {

  return (
    <div className="text-white md:flex justify-center flex-wrap">
        <CoderInfoCard userData={userData}/>
        <CoderDetailsCard userData={userData} plzReRender={plzReRender}/>
        <CoderBadgesCard/>
    </div>
  )
}

export default SecondaryProfileSection