// @flow

// ========= General Types ==========
export type RequestConfig = {
  port: number,
  ca: Uint8Array,
  cert: Uint8Array,
  key: Uint8Array,
};

// ========= Response Types =========
export type AdaAssurance = 'CWANormal' | 'CWAStrict';
export type AdaAssuranceV1 = 'normal' | 'strict';
export type AdaTransactionCondition = 'CPtxApplying' | 'CPtxInBlocks' | 'CPtxWontApply' | 'CPtxNotTracked';
export type AdaWalletRecoveryPhraseResponse = Array<string>;
export type AdaWalletCertificateAdditionalMnemonicsResponse = Array<string>;
export type AdaWalletCertificateRecoveryPhraseResponse = Array<string>;
export type AdaWalletRecoveryPhraseFromCertificateResponse = Array<string>;
export type GetWalletCertificateAdditionalMnemonicsResponse = Array<string>;
export type GetWalletCertificateRecoveryPhraseResponse = Array<string>;
export type GetWalletRecoveryPhraseFromCertificateResponse = Array<string>;

export type NodeInfo = {
  syncProgress: {
    quantity: number,
    unit: 'percent'
  },
  blockchainHeight: ?{
    quantity: number,
    unit: ?'blocks'
  },
  localBlockchainHeight: {
    quantity: number,
    unit: ?'blocks'
  },
  localTimeInformation: {
    differenceFromNtpServer: ?{
      quantity: number,
      unit: ?'microseconds'
    }
  },
  subscriptionStatus: Object
};

export type NodeUpdate = {
  applicationName: string,
  version: number
};

export type NodeSettings = {
  slotDuration: {
    quantity: number,
    unit: ?'milliseconds'
  },
  softwareInfo: {
    version: number,
    applicationName: string
  },
  projectVersion: string,
  gitRevision: string
};

export type AdaWalletInitData = {
  operation: 'create' | 'restore',
  backupPhrase: [string],
  assuranceLevel: AdaAssuranceV1,
  name: string,
  spendingPassword: ?string,
};

export type AdaAmount = {
  getCCoin: number,
};

export type AdaTransactionTag = 'CTIn' | 'CTOut';

export type AdaAddress = {
  id: string,
  used: boolean,
  changeAddress: boolean
};

export type AdaAddresses = Array<AdaAddress>;

export type AdaAccount = {
  amount: number,
  addresses: AdaAddresses,
  name: string,
  walletId: string,
  index: number
};

export type AdaAccounts = Array<AdaAccount>;

export type AdaTransactionInputOutput = [
  [string, AdaAmount],
];

export type AdaWallet = {
  createdAt: Date,
  syncState: AdaV1WalletSyncState,
  balance: number,
  hasSpendingPassword: boolean,
  assuranceLevel: AdaAssuranceV1,
  name: string,
  id: string,
  spendingPasswordLastUpdate: Date,
};

export type AdaWallets = Array<AdaWallet>;

// ========== V1 API =========

export type AdaV1Assurance = 'normal' | 'strict';
export type AdaV1WalletSyncStateTag = 'restoring' | 'synced';

export type AdaV1WalletSyncState = {
  data: ?{
    estimatedCompletionTime: {
      quantity: number,
      unit: 'milliseconds',
    },
    percentage: {
      quantity: number,
      unit: 'percent',
    },
    throughput: {
      quantity: number,
      unit: 'blocksPerSecond',
    },
  },
  tag: AdaV1WalletSyncStateTag,
};

export type AdaV1Wallet = {
  assuranceLevel: AdaV1Assurance,
  balance: number,
  createdAt: string,
  hasSpendingPassword: boolean,
  id: string,
  name: string,
  spendingPasswordLastUpdate: string,
  syncState: AdaV1WalletSyncState,
};

export type AdaV1Wallets = Array<AdaV1Wallet>;

export const AdaV1AssuranceOptions: {
  NORMAL: AdaV1Assurance, STRICT: AdaV1Assurance,
} = {
  NORMAL: 'normal', STRICT: 'strict',
};

export type AdaTransactions = Array<AdaTransaction>;
export type AdaTransaction = {
  amount: number,
  confirmations: number,
  creationTime: string,
  direction: 'outgoing' | 'incoming',
  id: string,
  type: 'local' | 'foreign',
  inputs: AdaTransactionInputOutputV1,
  outputs: AdaTransactionInputOutputV1,
  status: {
    tag: 'applying' | 'inNewestBlocks' | 'persisted' | 'wontApply' | 'creating',
    data: {},
  },
};

export type AdaTransactionInputOutputV1 = [
  {
    address: string,
    amount: number,
  },
];

export type AdaTransactionFee = {
  estimatedAmount: number,
  status: 'success',
  meta: {
    pagination: {}
  },
};

export type AdaTransactionParams = {
  data: {
    source: {
      accountIndex: number,
      walletId: string,
    },
    destinations: [
      {
        address: string,
        amount: number,
      },
    ],
    groupingPolicy: ?'OptimizeForSecurity' | 'OptimizeForSize',
    spendingPassword: ?string
  },
};

export type AdaTxFeeParams = AdaTransactionParams;

export type RedeemAdaParams = {
  redemptionCode: string,
  mnemonic: ?Array<string>,
  spendingPassword: string,
  walletId: string,
  accountIndex: number
};

export type RedeemPaperVendedAdaParams = {
  mnemonic: Array<string>,
  ...RedeemAdaParams
};

export type Pagination = {
  pagination: {
    totalPages: number,
    page: number,
    perPage: number,
    totalEntries: number
  }
};

export type ResponseStatus = 'success' | 'fail' | 'error';

export type ResponseBaseV1 = {
  status: ResponseStatus,
  meta: Pagination
};
