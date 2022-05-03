class ApplicationError extends Error {
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message || "Algo deu errado. Por favor, tente mais tarde.";
    this.status = status || 500;
  }
}

module.exports = ApplicationError;
