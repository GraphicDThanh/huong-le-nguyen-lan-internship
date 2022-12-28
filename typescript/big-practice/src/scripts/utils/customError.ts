class CustomError {
  code: number;

  message: string;

  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
  }
}

export default CustomError;
