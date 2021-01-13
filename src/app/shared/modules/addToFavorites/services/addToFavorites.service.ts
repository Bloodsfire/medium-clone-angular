import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { environment } from '../../../../../environments/environment'
import { ArticleInterface } from '../../../types/article.interface'
import { GetArticleResponseInterface } from '../../../types/getArticleResponse.interface'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeToFavorites(slug: string): Observable<ArticleInterface> {
    const url = this.getUrl(slug)
    return this.http.delete(url).pipe(map(this.getArticle))
  }

  getUrl(slug: string) {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(response: GetArticleResponseInterface): ArticleInterface {
    return response.article
  }
}
