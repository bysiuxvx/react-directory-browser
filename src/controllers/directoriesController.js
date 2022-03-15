export const getDirectoryDetails = async (directoryId) => {
  const hostUrl =
    "https://fnp5vd20r2.execute-api.us-east-1.amazonaws.com/dev/directories"

  const response = await fetch(
    directoryId ? `${hostUrl}/${directoryId}` : hostUrl
  )
  const data = await response.json()
  const { id, name, files, directories } = data
  return {
    id,
    name,
    contents: [
      ...directories.map((directory) => ({
        ...directory,
        type: "directory",
      })),
      ...files.map((file) => ({
        ...file,
        type: "file",
      })),
    ],
  }
}
