import React, { useState } from "react"

import Navigation from "./Navigation"
import List from "./List"

import { Container } from "@chakra-ui/react"

const FolderContents = ({ contents }) => {
  return (
    <Container maxW="container.xl" p={0} overflow="hidden">
      <List contents={contents} />
    </Container>
  )
}

export default FolderContents
