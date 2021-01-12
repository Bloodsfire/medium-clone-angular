import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { PersistanceService } from './shared/services/persistance.service'
import { AuthInterceptor } from './shared/services/authInterceptor.service'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'
import { YourFeedModule } from './yourFeed/yourFeed.module'
import { TagFeedModule } from './tagFeed/tagFeed.module'
import { ArticleModule } from './article/article.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    PersistanceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
