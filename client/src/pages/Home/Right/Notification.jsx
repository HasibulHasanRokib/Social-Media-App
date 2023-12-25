import New from "./New"


const Notification = () => {
  return (
    <div className="bg-white p-3 rounded-md border shadow-sm flex flex-col gap-2">
      <h5 className="font-semibold border-b-2 py-1">Today's news</h5>
      <New/>
      <New/>
      <New/>
      <button className="text-sm bg-blue-100 border-t-2 py-2 font-semibold text-blue-700 rounded-md">View more</button>
    </div>
  )
}

export default Notification
