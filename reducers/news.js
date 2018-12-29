import { GET_ARTICLE_LIST_RESULT } from '../actions/news';

export const initialState = {
  article: {},
  articleList: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST_RESULT:
      return {
        ...state,
        article: {},
        articleList: action.result
      };
    default:
      return state;
  }
};
