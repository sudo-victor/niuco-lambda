import 'dotenv/config'
import { LambdaFunctionURLEvent } from "aws-lambda";
import { MakeListUser } from './factory';

export const handler = async (event: LambdaFunctionURLEvent) => {
  const usecase = MakeListUser.make()
  const result = await usecase.execute()
  if (result.isLeft()) {
    return {
      statusCode: 500,
      body: result.value
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(result.value, null, 2),
  };
};
