import joi from 'joi';
import queryString from 'query-string';
import {
  AirtimeOptions, AirtimePostData, AirtimeResponse, SendAirtimeRequest,
} from './sendAirtimeRequest.types';
import { validateJoiSchema, sendRequest } from '../../utils/misc';
import { Credentials } from '../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../utils/getFullCredentials';

const getSchema = () => joi.object({
  recipients: joi.array().items(
    joi.object({
      phoneNumber: joi.string().regex(/^\+\d{1,3}\d{3,}$/, 'phone number').required(),
      currencyCode: joi.string().valid(['KES', 'UGX', 'TZS', 'NGN']).required(),
      amount: joi.number().required(),
    }).required(),
  ).min(1).required(),
}).required();

export const sendAirtimeRequest = (
  credentials: Credentials,
): SendAirtimeRequest => async (options) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const result = validateJoiSchema<AirtimeOptions>(getSchema(), options);

  const data: AirtimePostData = {
    username,
    recipients: JSON.stringify(result.recipients.map((r) => ({
      phoneNumber: r.phoneNumber,
      amount: `${r.currencyCode} ${r.amount}`,
    }))) as any,
  };

  return sendRequest<AirtimeResponse, string>({
    endpointCategory: 'AIRTIME',
    username,
    method: 'POST',
    data: queryString.stringify(data),
    headers: {
      apiKey,
      accept: format,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
