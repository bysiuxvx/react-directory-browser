import React, { useEffect, useState } from "react"

import { getDirectoryDetails } from "./controllers/directoriesController"

import Navigation from "./components/Navigation"
import FolderContents from "./components/FolderContents"

import { Container } from "@chakra-ui/react"

import "./styles/style.scss"

const App = () => {
  const [directoryPath, setDirectoryPath] = useState([])
  const [directoryId, setDirectoryId] = useState(null)
  const [contents, setContents] = useState([])

  const getContentsPath = async () => {
    const directory = await getDirectoryDetails(directoryId)
    const { id, name, contents } = directory
    setContents(contents)
    addToDirectoryPath({
      id,
      name,
    })
  }

  useEffect(() => {
    getContentsPath()
  }, [directoryId])

  const setCurrentDirectory = (item) => {
    setDirectoryId(Number(item.id))
  }

  const addToDirectoryPath = (directory) => {
    setDirectoryPath([...directoryPath, directory])
  }

  const onBreadcrumbsClick = (directory, i) => {
    setCurrentDirectory(directory)
    setDirectoryPath([...directoryPath.filter((directory, index) => index < i)])
  }

  return (
    <Container maxW="container.xl" p={0} overflow="hidden">
      <Navigation
        directoryPath={directoryPath}
        setDirectory={onBreadcrumbsClick}
      />
      <FolderContents
        contents={contents}
        setCurrentDirectory={setCurrentDirectory}
      />
    </Container>
  )
}

export default App
