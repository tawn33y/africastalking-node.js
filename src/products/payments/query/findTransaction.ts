import joi from 'joi';
import { Credentials } from '../../../utils/getFullCredentials.d';
import { FindTransactionOptions, FindTransactionResponse, FindTransactionQueryParams } from './findTransaction.d';
import { getFullCredentials } from '../../../utils/getFullCredentials';
import { validateJoiSchema, sendRequest } from '../../../utils/misc';

const getSchema = () => joi.object({
  transactionId: joi.string().required(),
}).required();

export const findTransaction = (credentials: Credentials) => async (
  options: FindTransactionOptions,
): Promise<FindTransactionResponse> => {
  const { apiKey, username, format } = await getFullCredentials(credentials);
  const result = await validateJoiSchema<FindTransactionOptions>(getSchema(), options);

  const queryParams: FindTransactionQueryParams = {
    ...result,
    username,
  };

  return sendRequest<FindTransactionResponse, null, FindTransactionQueryParams>({
    urlCategory: 'FIND_TRANSACTION',
    username,
    method: 'GET',
    headers: {
      apiKey,
      accept: format,
      'Content-Type': 'application/json',
    },
    params: queryParams,
  });
};