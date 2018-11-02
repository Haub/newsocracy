
export const articleReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_CATEGORY_NEWS':
    return action.articles
    default: 
    return state
  }
}