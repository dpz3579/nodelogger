const { logger, exceptionLogger } = require("./logger/types");

module.exports = {
  log: (...params) => logger.data(...params),
  error: (...params) => exceptionLogger.error(...params),
  warn: (...params) => logger.warn(...params),
  info: (...params) => logger.info(...params),
  debug: (...params) => logger.debug(...params),
  verbose: (...params) => logger.verbose(...params),
  silly: (...params) => logger.silly(...params),
  custom: (...params) => logger.custom(...params)
};
