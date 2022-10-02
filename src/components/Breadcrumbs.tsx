import React from 'react'

import {Text} from '@chakra-ui/react'
import {IDirectory} from "../../interface";

interface IBreadcrumbs {
    directoryPath: IDirectory[]
    setDirectory: (directory: IDirectory, i: number) => void
}

const Breadcrumbs: React.FC<IBreadcrumbs> = ({directoryPath, setDirectory}) => {
    const isLast = (index: number) => index === directoryPath.length - 1

    const onBreadcrumbsClick = (directory: IDirectory, i: number) => {
        if (isLast(i)) return
        setDirectory(directory, i)
    }

    const breadcrumbStyle = {
        fontWeight: 700,
        cursor: 'pointer'
    }

    return (
        <>
            {directoryPath &&
                directoryPath.map((directory, i) => (
                    <Text
                        style={!isLast(i) ? breadcrumbStyle : undefined}
                        textAlign={'center'}
                        onClick={() => onBreadcrumbsClick(directory, i)}
                        key={i}
                        fontSize="3xl"
                        color={'black'}
                    >
                        {directory.name}
                        {i === directoryPath.length - 1 ? '' : ' / '}
                    </Text>
                ))}
        </>
    )
}

export default Breadcrumbs
