export interface DocNavTreeListType {
    name: string,
    path: string,
    type: string
}

export interface DocNavListType {
    name: string,
    path: string,
    type: string
    docNavTreeList?: DocNavTreeListType[]
}