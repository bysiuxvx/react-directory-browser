import React, { useState } from "react"

import Navigation from "./Navigation"
import List from "./List"

const Body = ({ data }) => {
  return (
    <>
      <Navigation />
      <List data={data} />
    </>
  )
}

export default Body
