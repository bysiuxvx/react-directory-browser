import React, { useEffect, useState } from "react"
import axios from "axios"

import Body from "./components/Body"

import "./style.scss"

const App = () => {
  const [data, setData] = useState([])
  const key =
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories"

  useEffect(() => {
    axios.get(key).then((res) => {
      const response = res.data
      const combinedArr = response.directories.concat(response.files)
      setData(combinedArr)
    })
  }, [])

  return (
    <>
      <Body data={data} />
    </>
  )
}

export default App
