import { ProfileInterface } from './profileInterface'

export interface ArticleInterface {
  author: ProfileInterface
  body: string
  title: string
  description: string
  favorited: boolean
  favoritesCount: number
  slug: string
  tagList: string[]
  createdAt: string
  updatedAt: string
}
