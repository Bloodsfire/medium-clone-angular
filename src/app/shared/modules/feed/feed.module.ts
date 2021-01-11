import { NgModule } from '@angular/core'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FeedComponent } from './components/feed/feed.component'
import { GetFeedEffect } from './store/effects/getFeed.effect'
import { reducers } from './store/reducers'
import { FeedService } from './services/feed.service'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
