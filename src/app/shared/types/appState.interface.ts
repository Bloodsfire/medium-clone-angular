import { AuthStateInterface } from '../../auth/types/authState.interface'
import { FeedStateInterface } from '../modules/feed/types/feedState.interface'
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.interface'
import { ArticleInterface } from './article.interface'
import { CreateArticleStateInterface } from '../../createArticle/types/createArticleState.interface'
import { EditArticleStateInterface } from '../../editArticle/types/editArticleState.interface'
import { SettingsStateInterface } from '../../settings/types/settingsState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: FeedStateInterface
  popularTags: PopularTagsStateInterface
  article: ArticleInterface
  createArticle: CreateArticleStateInterface
  editArticle: EditArticleStateInterface
  settings: SettingsStateInterface
}
