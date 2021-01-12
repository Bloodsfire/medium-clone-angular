import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from '../../../environments/environment'
import { ArticleInputInterface } from '../../shared/types/articleInput.interface'
import { SaveArticleResponseInterface } from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInputInterface> {
    const url = `${environment.apiUrl + '/articles'}`

    return this.http
      .post<SaveArticleResponseInterface>(url, articleInput)
      .pipe(map((response: SaveArticleResponseInterface) => response.article))
  }
}
