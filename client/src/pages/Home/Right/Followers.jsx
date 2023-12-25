import FollowerCard from "./FollowerCard"


const Followers = () => {
  return (
    <div className="flex flex-col gap-2 bg-white rounded-md p-3 border shadow-sm">
      <h5 className="font-semibold  border-b-2 py-2">Who is following you</h5>
      <div className="flex flex-col gap-3">
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
        <FollowerCard />
      </div>
      <button className="text-sm bg-blue-100 border-t-2 py-2 font-semibold text-blue-700 rounded-md">View more</button>
    </div>
  )
}

export default Followers
