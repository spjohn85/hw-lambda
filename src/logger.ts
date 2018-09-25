import pino = require('pino');

export let awsRequestId: string = '';

export const parentLogger: pino.Logger = pino({
  name: 'log-parser',
  safe: true,
  slowtime: true,
  level: 'info',
});

export let log = parentLogger;
/**
 * Sets the child logger so that the Lambda awsRequestId is attached to all the log statements.
 *
 * @param requestId Every lambda invocation has a unique request id. This request id corresponds to that invocation.
 */
export function setAwsRequestIdForLogger( requestId: string): void {
  awsRequestId = requestId;
  log = parentLogger.child({requestId});
}