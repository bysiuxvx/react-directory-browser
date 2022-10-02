import { IDirectory, IFile } from '../../interface'

export const getDirectoryDetails = async (directoryId: number | null) => {
  const hostUrl = 'https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories'

  const response = await fetch(directoryId ? `${hostUrl}/${directoryId}` : hostUrl)
  const data = await response.json()
  const { id, name, files, directories } = data
  return {
    id,
    name,
    contents: [
      ...directories.map((directory: IDirectory) => ({
        ...directory,
        type: 'directory'
      })),
      ...files.map((file: IFile) => ({
        ...file,
        type: 'file'
      }))
    ]
  }
}
