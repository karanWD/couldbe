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
  // 'youtube videos': dataItemType[]
}

export type DataTypeKey = keyof dataType
interface GraphItemData {
  AI_AND_TECH: number
  LEADER_SHIP_AND_PEPPLE_SKILLS: number
  PROBLEM_SOLVING: number
  SELF_MANAGMENT: number
}
export interface GraphDataType {
  avrage: GraphItemData
  future: GraphItemData
  now: GraphItemData
}
