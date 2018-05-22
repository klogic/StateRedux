// state argument is not application state, it a reducer state
export default function(state = null, action) { //set state = null for in case no action.
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}