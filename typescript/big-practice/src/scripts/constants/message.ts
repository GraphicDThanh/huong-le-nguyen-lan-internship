enum PopupMessage {
  DELETE_NOTE = 'Delete note forever ?',
  ERRORS_MSG = 'Sorry! Something went wrong: ',
}

enum APIMessage {
  GET = "Can't get data from API",
  POST = "Can't post data to API",
  DELETE = "Can't delete data",
  PATCH = "Can't update data",
}

enum ErrorMessage {
  EMAIL_NOT_EXISTS = 'Email is not exists',
  EMAIL_ALREADY_EXISTS = 'Email already exists',
  PASSWORD_NOT_MATCH = 'Password is not match',
  PASSWORD_INCORRECT = 'Password incorrect',
}

export { ErrorMessage, PopupMessage, APIMessage };
