import { FeedStateInterface } from '../types/feedState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action'
import { routerNavigationAction } from '@ngrx/router-store'

const initalState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initalState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (state): FeedStateInterface => initalState)
)

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
