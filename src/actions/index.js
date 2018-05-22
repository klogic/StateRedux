export function selectBook(book) {
  // action alway need to return type. and it must be Capital Letter
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}