export interface IFile {
    name: string
    type: 'directory' | 'file'
}

export interface IDirectory {
    name: string
    id: string
    contents: any
}

export interface IRootObject {
    name: string
    id: string
    files: IFile[]
    directories: IDirectory[]
}
