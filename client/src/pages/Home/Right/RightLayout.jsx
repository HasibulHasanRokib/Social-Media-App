import Followers from "./Followers"
import Notification from "./Notification"

const RightSide = () => {
  return (
    <div className="flex flex-col relative gap-2 max-md:hidden">
      <Followers />
      <Notification/>
    </div>
  )
}

export default RightSide
