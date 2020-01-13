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
    REASON: {
        SALARY: string;
        SALARY_WITH_CHARGE: string;
        BUSINESS: string;
        BUSINESS_WITH_CHARGE: string;
        PROMOTION: string;
    };
    PROVIDER: {
        ATHENA: string;
        MPESA: string;
    };
    TRANSFER_TYPE: {
        BUY_GOODS: string;
        PAYBILL: string;
        DISBURSE_FUNDS: string;
        B2B_TRANSFER: string;
    };
    BANK: {
        FCMB_NG: number;
        ZENITH_NG: number;
        ACCESS_NG: number;
        GTBANK_NG: number;
        ECOBANK_NG: number;
        DIAMOND_NG: number;
        PROVIDUS_NG: number;
        UNITY_NG: number;
        STANBIC_NG: number;
        STERLING_NG: number;
        PARKWAY_NG: number;
        AFRIBANK_NG: number;
        ENTREPRISE_NG: number;
        FIDELITY_NG: number;
        HERITAGE_NG: number;
        KEYSTONE_NG: number;
        SKYE_NG: number;
        STANCHART_NG: number;
        UNION_NG: number;
        UBA_NG: number;
        WEMA_NG: number;
        FIRST_NG: number;
    };
};
