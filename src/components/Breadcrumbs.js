import React from "react"

import { Text } from "@chakra-ui/react"

const Breadcrumbs = ({ directoryPath, setDirectory }) => {
  const isLast = (index) => index === directoryPath.length - 1

  const onBreadcrumbsClick = (directory, i) => {
    if (isLast(i)) return
    setDirectory(directory, i)
  }

  const breadcrumbStyle = {
    fontWeight: 700,
    cursor: "pointer",
  }

  return (
    <>
      {directoryPath &&
        directoryPath.map((directory, i) => (
          <Text
            style={!isLast(i) ? breadcrumbStyle : null}
            textAlign={"center"}
            onClick={() => onBreadcrumbsClick(directory, i)}
            key={i}
            fontSize="3xl"
            color={"black"}
          >
            {directory.name}
            {i === directoryPath.length - 1 ? "" : " / "}
          </Text>
        ))}
    </>
  )
}

export default Breadcrumbs
