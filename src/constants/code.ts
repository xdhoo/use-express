enum Code {
  success = 3000,
  denied,
  error,
}

enum CodeMessage {
  success = "Success",
  denied = "Denied",
  error = "Error",
}

type codeType = keyof typeof Code;

export { Code, codeType, CodeMessage };
