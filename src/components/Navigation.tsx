import React from 'react'

import Breadcrumbs from './Breadcrumbs'

import {Flex} from '@chakra-ui/react'
import {IDirectory} from "../../interface";

interface INav {
    directoryPath: IDirectory[]
    setDirectory: (directory: IDirectory, i: number) => void
}

const Navigation: React.FC<INav> = ({directoryPath, setDirectory}) => {
    return (
        <Flex maxW={'container.xl'} pl={5} justifyContent="start" bg="#718096"
              borderBottomRadius={10}>
            <Breadcrumbs directoryPath={directoryPath}
                         setDirectory={setDirectory}/>
        </Flex>
    )
}

export default Navigation
