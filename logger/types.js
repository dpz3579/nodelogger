const { createLogger, format, transports, addColors } = require('winston');
const { combine, timestamp, printf } = format;

const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6,
    custom: 7
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta',
    custom: 'yellow'
  }
};

addColors(config.colors);

function rest(info) {
  const extraInfo = Object.assign({}, info, {
    level: undefined,
    message: undefined,
    label: undefined,
    timestamp: undefined,
  });

  var deSerialized = "";
  for(var prop in extraInfo) {
    if(extraInfo[prop]) deSerialized += prop + " " + extraInfo[prop] + " ";
  }
  return deSerialized;
}

const myFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message} ${rest(info)}`;
});

const consoleTransport = new transports.Console();
let timeStampFormat = {};

const logger = createLogger({
  levels: config.levels,
  format: combine(
    format.splat(),
    format.colorize(),
    timestamp(timeStampFormat),
    myFormat,
  ),
  exitOnError: false
});
logger.clear().add(consoleTransport);

const exceptionLogger = createLogger({
  levels: config.levels,
  format: combine(
    format.splat(),
    format.colorize(),
    timestamp(timeStampFormat),
    myFormat,
  ),
  exitOnError: false
});
exceptionLogger.clear().add(consoleTransport);

module.exports = {
  logger,
  exceptionLogger,
};
