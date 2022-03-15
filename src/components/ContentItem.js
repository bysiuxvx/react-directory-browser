import React, { useEffect, useState } from "react"

import { Box, Tooltip, Icon, Center, Text } from "@chakra-ui/react"

import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined"
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined"
import PhotoOutlinedIcon from "@material-ui/icons/PhotoOutlined"

const ContentItem = ({ item, onDirectorySelect }) => {
  const [icon, setIcon] = useState(null)

  const MAX_FILE_NAME_LENGTH = 8
  const getItemName = (name) =>
    name.split(".")[0].length <= MAX_FILE_NAME_LENGTH
      ? name
      : `${name.substring(0, MAX_FILE_NAME_LENGTH)}...`

  const onItemClick = () => {
    if (item.type !== "directory") return
    onDirectorySelect(item)
  }

  useEffect(() => {
    if (item.name.includes(".jpg")) setIcon(PhotoOutlinedIcon)
    else if (item.type === "directory") setIcon(FolderOutlinedIcon)
    else setIcon(InsertDriveFileOutlinedIcon)
  }, [item.name, item.type])

  return (
    <Tooltip label={item.name}>
      <Center
        flexDirection="column"
        onClick={onItemClick}
        bg={"#E2E8F0"}
        m={8}
        w={90}
        p={1}
        overflow={"hidden"}
        borderRadius="7"
        style={item.type === "directory" ? { cursor: "pointer" } : null}
      >
        <Box textAlign={"center"}>
          <Icon as={icon} color="#2D3748" />
        </Box>
        <Text color={"#2D3748"}>{getItemName(item.name)}</Text>
      </Center>
    </Tooltip>
  )
}

export default ContentItem
