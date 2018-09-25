import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';
import { log, setAwsRequestIdForLogger } from './logger';

export const hello: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  log.info('Hello World Message');
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }),
  };
  cb(null, response);
}