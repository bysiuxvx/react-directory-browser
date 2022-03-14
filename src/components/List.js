import React from "react"

import ListItem from "./ListItem"

const List = ({ data }) => {
  return (
    <>{data && data.map((item) => <ListItem key={item.name} item={item} />)}</>
  )
}

export default List
