import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'

import { AddToFavoritesComponent } from './components/addToFavorites/addToFavorites.component'
import { AddToFavoritesService } from './services/addToFavorites.service'
import { AddToFavoritesEffect } from './effect/addToFavorites.effect'

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
  exports: [AddToFavoritesComponent],
  declarations: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
