import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { reducers } from './store/reducers'
import { GetArticleEffect } from './store/effects/getArticle.effect'
import { ArticleService as SharedArticleService } from '../shared/services/article.service'
import { ErrorMessageModule } from '../shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from '../shared/modules/loading/loading.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  declarations: [],
  exports: [],
  providers: [SharedArticleService],
})
export class ArticleModule {}
