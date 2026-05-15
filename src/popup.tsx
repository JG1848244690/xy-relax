import { useState } from "react"
import "~style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="w-80 p-4 bg-white">
      <h2 className="text-lg font-bold mb-3 text-red-200">
        Welcome to your Plasmo Extension!
      </h2>
      <input
        className="w-full px-3 py-2 border rounded"
        onChange={(e) => setData(e.target.value)}
        value={data}
      />
    </div>
  )
}

export default IndexPopup
