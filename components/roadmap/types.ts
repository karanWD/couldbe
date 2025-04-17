export interface dataItemType {
  URL: string
  authors: string[]
  description: string
  id: number
  level: number
  picture: string
  price: number
  publisher: string
  skills: string[]
  title: string
  Language: string
  number_of_pages: number
  channel: string
  duration: number
  publication: string
}
export interface dataType {
  articles: dataItemType[]
  books: dataItemType[]
  videos: dataItemType[]
}

export type DataTypeKey = keyof dataType

interface GraphItemData {
  problemSolving: number
  selfManagement: number
  leadership: number
  technology: number
}
export interface GraphDataType {
  average: GraphItemData
  couldbe: GraphItemData
  current: GraphItemData
}
