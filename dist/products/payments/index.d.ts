import { Credentials } from '../../utils/getFullCredentials.types';
export declare const PAYMENTS: (credentials: Credentials) => {
    mobileCheckout: (options: import("./mobile/mobileCheckout.types").MobileCheckoutOptions) => Promise<import("./mobile/mobileCheckout.types").MobileCheckoutResponse>;
    mobileB2C: (options: import("./mobile/mobileB2C.types").MobileB2COptions) => Promise<import("./mobile/mobileB2C.types").MobileB2CResponse>;
    mobileB2B: (options: import("./mobile/mobileB2B.types").MobileB2BOptions) => Promise<import("./mobile/mobileB2B.types").MobileB2BResponse>;
    bankCheckoutCharge: (options: import("./bank/bankCheckoutCharge.types").BankCheckoutChargeOptions) => Promise<import("./bank/bankCheckoutCharge.types").BankCheckoutChargeResponse>;
    bankCheckoutValidate: (options: import("./bank/bankCheckoutValidate.types").BankCheckoutValidateOptions) => Promise<import("./bank/bankCheckoutValidate.types").BankCheckoutValidateResponse>;
    bankTransfer: (options: import("./bank/bankTransfer.types").BankTransferOptions) => Promise<import("./bank/bankTransfer.types").BankTransferResponse>;
    walletTransfer: (options: import("./walletTransfer.types").WalletTransferOptions) => Promise<import("./walletTransfer.types").WalletTransferResponse>;
    topupStash: (options: import("./topupStash.types").TopupStashOptions) => Promise<import("./topupStash.types").TopupStashResponse>;
    cardCheckoutCharge: (options: import("./card/cardCheckoutCharge.types").CardCheckoutChargeOptions) => Promise<import("./card/cardCheckoutCharge.types").CardCheckoutChargeResponse>;
    cardCheckoutValidate: (options: import("./card/cardCheckoutValidate.types").CardCheckoutValidateOptions) => Promise<import("./card/cardCheckoutValidate.types").CardCheckoutValidateResponse>;
    fetchProductTransactions: (options: import("./query/fetchProductTransactions.types").FetchProductTransactionsOptions) => Promise<import("./query/fetchProductTransactions.types").FetchProductTransactionsResponse>;
    findTransaction: (options: import("./query/findTransaction.types").FindTransactionOptions) => Promise<import("./query/findTransaction.types").FindTransactionResponse>;
    fetchWalletTransactions: (options: import("./query/fetchWalletTransactions.types").FetchWalletTransactionsOptions) => Promise<import("./query/fetchWalletTransactions.types").FetchWalletTransactionsResponse>;
    fetchWalletBalance: () => Promise<import("./query/fetchWalletBalance.types").FetchWalletBalanceResponse>;
    mobileData: (options: import("./mobile/mobileData.types").MobileDataOptions) => Promise<import("./mobile/mobileData.types").MobileDataResponse>;
    checkout: (options: import("./mobile/mobileCheckout.types").MobileCheckoutOptions) => Promise<import("./mobile/mobileCheckout.types").MobileCheckoutResponse>;
    checkOut: (options: import("./mobile/mobileCheckout.types").MobileCheckoutOptions) => Promise<import("./mobile/mobileCheckout.types").MobileCheckoutResponse>;
    payConsumer: (options: import("./mobile/mobileB2C.types").MobileB2COptions) => Promise<import("./mobile/mobileB2C.types").MobileB2CResponse>;
    payBusiness: (options: import("./mobile/mobileB2B.types").MobileB2BOptions) => Promise<import("./mobile/mobileB2B.types").MobileB2BResponse>;
};