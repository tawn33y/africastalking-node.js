import joi from 'joi';
import queryString from 'query-string';
import { validateJoiSchema, sendRequest } from '../../utils/misc';
import {
  SendMessage, SendMessageOptions, SendMessagePostData, SendMessageResponse, SendSms,
  SendPremiumSms,
} from './sendMessage.types';
import { Credentials } from '../../utils/getFullCredentials.types';
import { getFullCredentials } from '../../utils/getFullCredentials';
import { customRegex } from '../../utils/constants';

const getSchema = (isPremium: boolean) => {
  const schema = joi.object({
    to: joi.alternatives().try(
      joi.array().items(joi.string().regex(customRegex.phoneNumber, 'to').required()).required(),
      joi.string().regex(customRegex.phoneNumber, 'to').required(),
    ),
    message: joi.string().required(),
    from: joi.string(),
    enqueue: joi.boolean(),
  }).required();

  if (isPremium) {
    return schema.keys({
      bulkSMSMode: joi.boolean(),
      keyword: joi.string().required(),
      linkId: joi.string(),
      retryDurationInHours: joi.number(),
    });
  }

  return schema;
};

const sendMessage = (
  credentials: Credentials,
): SendMessage => async (options, isPremium = false) => {
  const { apiKey, username, format } = getFullCredentials(credentials);
  const result = validateJoiSchema<SendMessageOptions>(getSchema(isPremium), options);

  const { to } = result;

  const data: SendMessagePostData = {
    username,
    ...result,
    to: Array.isArray(to) ? to.join(',') : to,
    enqueue: result.enqueue ? 1 : 0,
    bulkSMSMode: result.bulkSMSMode ? 1 : 0,
  };

  return sendRequest<SendMessageResponse, string>({
    endpointCategory: 'SMS',
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

export const sendSms = (
  credentials: Credentials,
): SendSms => (opts) => sendMessage(credentials)(opts);

export const sendPremiumSms = (
  credentials: Credentials,
): SendPremiumSms => (opts) => sendMessage(credentials)(opts, true);
