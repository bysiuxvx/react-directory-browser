import React, {useEffect, useState} from 'react'

import {getDirectoryDetails} from './controllers/directoriesController'

import Navigation from './components/Navigation'
import FolderContents from './components/FolderContents'

import {Container} from '@chakra-ui/react'

import {IDirectory, IFile} from '../interface'

const App = () => {
    const [directoryPath, setDirectoryPath] = useState<IDirectory[]>([])
    const [directoryId, setDirectoryId] = useState<number | null>(null)
    const [contents, setContents] = useState<IFile[]>([])

    const getContentsPath = async (): Promise<void> => {
        const directory: IDirectory = await getDirectoryDetails(directoryId)
        const {id, name, contents} = directory
        setContents(contents)
        addToDirectoryPath({
            id,
            name
        })
    }

    useEffect(() => {
        getContentsPath()
    }, [directoryId])

    const setCurrentDirectory = (dir: IDirectory) => {
        setDirectoryId(Number(dir.id))
    }

    const addToDirectoryPath = (directory: any) => {
        setDirectoryPath([...directoryPath, directory])
        console.log(directoryPath, directory)
    }

    const onBreadcrumbsClick = (directory: IDirectory, i: number): void => {
        setCurrentDirectory(directory)
        setDirectoryPath([...directoryPath.filter((directory, index) => index < i)])
    }

    return (
        <Container height={'100vh'} maxW="container.xl" p={0} overflow="hidden">
            <Navigation directoryPath={directoryPath}
                        setDirectory={onBreadcrumbsClick}/>
            <FolderContents contents={contents}
                            setCurrentDirectory={setCurrentDirectory}/>
        </Container>
    )
}

export default App
