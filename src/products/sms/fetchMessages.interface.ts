export interface FetchMessagesOptions {
  lastReceivedId?: string;
}

export type FetchMessagesQueryParams = FetchMessagesOptions & {
  username: string;
};

export interface FetchMessagesResponse {
  SMSMessageData: {
    Messages: {
      linkId: string;
      text: string;
      to: string;
      id: number;
      date: string;
      from: string;
    }[];
  };
}
