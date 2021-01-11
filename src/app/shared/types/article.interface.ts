import { ProfileInterface } from './profileInterface'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  title: string
  description: string
  favorited: boolean
  favoritedCount: number
  slug: string
  tagList: string[]
  createdAt: string
  updatedAt: string
}
