import React from "react"

import ContentItem from "./ContentItem"

import { Container, Text, Wrap, WrapItem } from "@chakra-ui/react"

const FolderContents = ({ contents, setCurrentDirectory }) => {
  return (
    <Container maxW={"container.lg"}>
      <Wrap>
        {contents && contents.length ? (
          contents.map((item, i) => (
            <WrapItem>
              <ContentItem
                onDirectorySelect={setCurrentDirectory}
                item={item}
                key={i}
              />
            </WrapItem>
          ))
        ) : (
          <WrapItem>
            <Text fontSize={"xl"} mt={8}>
              -- Empty --
            </Text>
          </WrapItem>
        )}
      </Wrap>
    </Container>
  )
}

export default FolderContents
