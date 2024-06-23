import 'dotenv/config'
import { LambdaFunctionURLEvent } from "aws-lambda";

export const handler = async (event: LambdaFunctionURLEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};
