const Avatar = ({ userId, username, online, photoURL }) => {
  const colors = [
    "bg-teal-200",
    "bg-red-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-blue-200",
    "bg-yellow-200",
    "bg-pink-200",
  ]
  const userIdBase10 = parseInt(userId, 16)
  const colorIndex = userIdBase10 % colors.length
  const color = colors[colorIndex]
  return (
    <div
      className={"w-12 h-12 relative rounded-full flex items-center " + color}
    >
      {photoURL === "null" || photoURL === null ? (
        <div className="w-full text-center opacity-70 text-lg font-bold font-serif">
          {username[0]}
        </div>
      ) : (
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}/dp/${photoURL}`}
          alt=""
          className="w-full rounded-full object-cover"
        />
      )}
      {online && (
        <div className="absolute w-4 h-4 bg-green-600 bottom-0 right-0 rounded-full border border-white shadow-lg shadow-black"></div>
      )}
      {!online && (
        <div className="absolute w-4 h-4 bg-gray-400 bottom-0 right-0 rounded-full border border-white shadow-lg shadow-black"></div>
      )}
    </div>
  )
}

export default Avatar
