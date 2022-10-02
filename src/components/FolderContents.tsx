import React from 'react'

import ContentItem from './ContentItem'

import { Container, Text, Wrap, WrapItem } from '@chakra-ui/react'
import {IDirectory, IFile} from "../../interface";

interface IFolderContents {
    contents: IFile[]
    setCurrentDirectory: (directory: IDirectory) => void
}

const FolderContents: React.FC<IFolderContents> = ({ contents, setCurrentDirectory }) => {
  return (
    <Container maxW={'container.lg'}>
      <Wrap>
        {contents && contents.length ? (
          contents.map((item: IFile, i: number) => (
            <WrapItem>
              <ContentItem onDirectorySelect={setCurrentDirectory} item={item} key={i} />
            </WrapItem>
          ))
        ) : (
          <WrapItem>
            <Text fontSize={'xl'} mt={8}>
              -- Empty --
            </Text>
          </WrapItem>
        )}
      </Wrap>
    </Container>
  )
}

export default FolderContents
