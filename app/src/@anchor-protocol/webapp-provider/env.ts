import { TERRA_QUERY_KEY } from '@terra-money/webapp-fns';
import { TxRefetchMap } from '@terra-money/webapp-provider';

export enum ANCHOR_TX_KEY {
  EARN_DEPOSIT = 'ANCHOR_TX_EARN_DEPOSIT',
  EARN_WITHDRAW = 'ANCHOR_TX_EARN_WITHDRAW',
  BORROW_BORROW = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_REPAY = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_PROVIDE_COLLATERAL = 'ANCHOR_TX_BORROW_BORROW',
  BORROW_REDEEM_COLLATERAL = 'ANCHOR_TX_BORROW_BORROW',
  BOND_MINT = 'ANCHOR_TX_BOND_MINT',
  BOND_BURN = 'ANCHOR_TX_BOND_BURN',
  BOND_SWAP = 'ANCHOR_TX_BOND_SWAP',
  BOND_CLAIM = 'ANCHOR_TX_BOND_CLAIM',
  BOND_WITHDRAW = 'ANCHOR_TX_BOND_WITHDRAW',
  ANC_ANC_UST_LP_PROVIDE = 'ANCHOR_TX_ANC_ANC_UST_LP_PROVIDE',
  ANC_ANC_UST_LP_WITHDRAW = 'ANCHOR_TX_ANC_ANC_UST_LP_WITHDRAW',
  ANC_ANC_UST_LP_STAKE = 'ANCHOR_TX_ANC_ANC_UST_LP_STAKE',
  ANC_ANC_UST_LP_UNSTAKE = 'ANCHOR_TX_ANC_ANC_UST_LP_UNSTAKE',
  ANC_BUY = 'ANCHOR_TX_ANC_BUY',
  ANC_SELL = 'ANCHOR_TX_ANC_SELL',
  ANC_GOVERNANCE_STAKE = 'ANCHOR_TX_ANC_GOVERNANCE_STAKE',
  ANC_GOVERNANCE_UNSTAKE = 'ANCHOR_TX_ANC_GOVERNANCE_UNSTAKE',
  GOV_CREATE_POLL = 'ANCHOR_TX_GOV_CREATE_POLL',
  GOV_VOTE = 'ANCHOR_TX_GOV_VOTE',
  REWARDS_ALL_CLAIM = 'ANCHOR_TX_REWARDS_ALL_CLAIM',
  REWARDS_ANC_UST_LP_CLAIM = 'ANCHOR_TX_REWARDS_UST_LP_CLAIM',
  REWARDS_UST_BORROW_CLAIM = 'ANCHOR_TX_REWARDS_UST_BORROW_CLAIM',
  AIRDROP_CLAIM = 'ANCHOR_TX_AIRDROP_CLAIM',
  TERRA_SEND = 'ANCHOR_TX_TERRA_SEND',
}

export enum ANCHOR_QUERY_KEY {
  EARN_EPOCH_STATES = 'ANCHOR_QUERY_EARN_EPOCH_STATES',
  EARN_APY_HISTORY = 'ANCHOR_QUERY_EARN_APY_HISTORY',
  EARN_TRANSACTION_HISTORY = 'ANCHOR_QUERY_EARN_TRANSACTION_HISTORY',
  BORROW_MARKET = 'ANCHOR_QUERY_BORROW_MARKET',
  BORROW_BORROWER = 'ANCHOR_QUERY_BORROW_BORROWER',
  BORROW_APY = 'ANCHOR_QUERY_BORROW_APY',
  BORROW_COLLATERAL_BORROWER = 'ANCHOR_QUERY_BORROW_COLLATERAL_BORROWER',
  BOND_BLUNA_EXCHANGE_RATE = 'ANCHOR_QUERY_BOND_EXHCNAGE_RATE',
  BOND_BLUNA_PRICE = 'ANCHOR_QUERY_BOND_BLUNA_PRICE',
  BOND_CLAIMABLE_REWARDS = 'ANCHOR_QUERY_BOND_CLAIMABLE_REWARDS',
  BOND_VALIDATORS = 'ANCHOR_QUERY_BOND_VALIDATORS',
  BOND_WITHDRAWABLE_AMOUNT = 'ANCHOR_QUERY_BOND_WITHDRAWABLE_AMOUNT',
  ANC_PRICE = 'ANCHOR_QUERY_ANC_PRICE',
  ANC_LP_STAKING_STATE = 'ANCHOR_QUERY_ANC_STAKING_STATE',
  ANC_BALANCE = 'ANCHOR_QUERY_ANC_BALANCE',
  ANC_TOKEN_INFO = 'ANCHOR_QUERY_ANC_TOKEN_INFO',
  GOV_CONFIG = 'ANCHOR_QUERY_GOV_CONFIG',
  GOV_DISTRIBUTION_MODEL_UPDATE_CONFIG = 'ANCHOR_QUERY_GOV_DISTRIBUTION_MODEL_UPDATE_CONFIG',
  GOV_POLL = 'ANCHOR_QUERY_GOV_POLL',
  GOV_POLLS = 'ANCHOR_QUERY_GOV_POLLS',
  GOV_STATE = 'ANCHOR_QUERY_GOV_STATE',
  GOV_VOTERS = 'ANCHOR_QUERY_GOV_VOTERS',
  GOV_MYPOLLS = 'ANCHOR_QUERY_GOV_MYPOLLS',
  REWARDS_ANC_GOVERNANCE_REWARDS = 'ANCHOR_QUERY_REWARDS_ANC_GOVERNANCE_REWARDS',
  REWARDS_ANCHOR_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_ANCHOR_LP_REWARDS',
  REWARDS_ANC_UST_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_ANC_UST_LP_REWARDS',
  REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS = 'ANCHOR_QUERY_REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS',
  REWARDS_CLAIMABLE_UST_BORROW_REWARDS = 'ANCHOR_QUERY_REWARDS_CLAIMABLE_UST_BORROW_REWARDS',
  REWARDS_UST_BORROW_REWARDS = 'ANCHOR_QUERY_REWARDS_UST_BORROW_REWARDS',
  AIRDROP_CHECK = 'ANCHOR_QUERY_AIRDROP_CHECK',
  TERRA_LAST_SYNCED_HEIGHT = 'ANCHOR_QUERY_LAST_SYNCED_HEIGHT',
  MARKET_STATE = 'ANCHOR_QUERY_MARKET_STATE',
  MARKET_BASSET = 'ANCHOR_QUERY_MARKET_BASSET',
  MARKET_STABLE_COIN = 'ANCHOR_QUERY_MARKET_STABLE_COIN',
  MARKET_ANC = 'ANCHOR_QUERY_MARKET_ANC',
  MARKET_BLUNA = 'ANCHOR_QUERY_MARKET_BLUNA',
  MARKET_COLLATERALS = 'ANCHOR_QUERY_MARKET_COLLATERALS',
  MARKET_DEPOSIT_AND_BORROW = 'ANCHOR_QUERY_MARKET_DEPOSIT_AND_BORROW',
  MARKET_UST = 'ANCHOR_QUERY_MARKET_UST',
  MARKET_BUYBACK = 'ANCHOR_QUERY_MARKET_BUYBACK',
}

export const ANCHOR_TX_REFETCH_MAP: TxRefetchMap = {
  [ANCHOR_TX_KEY.EARN_DEPOSIT]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.EARN_EPOCH_STATES,
    {
      queryKey: ANCHOR_QUERY_KEY.EARN_TRANSACTION_HISTORY,
      wait: 1000 * 3,
    },
  ],
  [ANCHOR_TX_KEY.EARN_WITHDRAW]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.EARN_EPOCH_STATES,
    {
      queryKey: ANCHOR_QUERY_KEY.EARN_TRANSACTION_HISTORY,
      wait: 1000 * 3,
    },
  ],
  [ANCHOR_TX_KEY.BORROW_BORROW]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BORROW_MARKET,
    ANCHOR_QUERY_KEY.BORROW_BORROWER,
    ANCHOR_QUERY_KEY.BORROW_APY,
    ANCHOR_QUERY_KEY.BORROW_COLLATERAL_BORROWER,
  ],
  [ANCHOR_TX_KEY.BORROW_REPAY]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BORROW_MARKET,
    ANCHOR_QUERY_KEY.BORROW_BORROWER,
    ANCHOR_QUERY_KEY.BORROW_APY,
    ANCHOR_QUERY_KEY.BORROW_COLLATERAL_BORROWER,
  ],
  [ANCHOR_TX_KEY.BORROW_PROVIDE_COLLATERAL]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BORROW_MARKET,
    ANCHOR_QUERY_KEY.BORROW_BORROWER,
    ANCHOR_QUERY_KEY.BORROW_APY,
    ANCHOR_QUERY_KEY.BORROW_COLLATERAL_BORROWER,
  ],
  [ANCHOR_TX_KEY.BORROW_REDEEM_COLLATERAL]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BORROW_MARKET,
    ANCHOR_QUERY_KEY.BORROW_BORROWER,
    ANCHOR_QUERY_KEY.BORROW_APY,
    ANCHOR_QUERY_KEY.BORROW_COLLATERAL_BORROWER,
  ],
  [ANCHOR_TX_KEY.BOND_MINT]: [TERRA_QUERY_KEY.TOKEN_BALANCES],
  [ANCHOR_TX_KEY.BOND_BURN]: [TERRA_QUERY_KEY.TOKEN_BALANCES],
  [ANCHOR_TX_KEY.BOND_SWAP]: [TERRA_QUERY_KEY.TOKEN_BALANCES],
  [ANCHOR_TX_KEY.BOND_CLAIM]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BOND_CLAIMABLE_REWARDS,
  ],
  [ANCHOR_TX_KEY.BOND_WITHDRAW]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.BOND_WITHDRAWABLE_AMOUNT,
  ],
  [ANCHOR_TX_KEY.ANC_ANC_UST_LP_PROVIDE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
  ],
  [ANCHOR_TX_KEY.ANC_ANC_UST_LP_WITHDRAW]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
  ],
  [ANCHOR_TX_KEY.ANC_ANC_UST_LP_STAKE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.ANC_LP_STAKING_STATE,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS,
  ],
  [ANCHOR_TX_KEY.ANC_ANC_UST_LP_UNSTAKE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.ANC_LP_STAKING_STATE,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS,
  ],
  [ANCHOR_TX_KEY.ANC_BUY]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
  ],
  [ANCHOR_TX_KEY.ANC_SELL]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
  ],
  [ANCHOR_TX_KEY.ANC_GOVERNANCE_STAKE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
  ],
  [ANCHOR_TX_KEY.ANC_GOVERNANCE_UNSTAKE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
  ],
  [ANCHOR_TX_KEY.GOV_CREATE_POLL]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.GOV_POLLS,
    ANCHOR_QUERY_KEY.GOV_MYPOLLS,
  ],
  [ANCHOR_TX_KEY.GOV_VOTE]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.GOV_POLL,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.GOV_VOTERS,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
  ],
  [ANCHOR_TX_KEY.REWARDS_ALL_CLAIM]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANCHOR_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_UST_BORROW_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_UST_BORROW_REWARDS,
  ],
  [ANCHOR_TX_KEY.REWARDS_ANC_UST_LP_CLAIM]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANCHOR_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_UST_BORROW_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_UST_BORROW_REWARDS,
  ],
  [ANCHOR_TX_KEY.REWARDS_UST_BORROW_CLAIM]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.ANC_BALANCE,
    ANCHOR_QUERY_KEY.REWARDS_ANC_GOVERNANCE_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANCHOR_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_ANC_UST_LP_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_CLAIMABLE_UST_BORROW_REWARDS,
    ANCHOR_QUERY_KEY.REWARDS_UST_BORROW_REWARDS,
  ],
  [ANCHOR_TX_KEY.AIRDROP_CLAIM]: [
    TERRA_QUERY_KEY.TOKEN_BALANCES,
    ANCHOR_QUERY_KEY.AIRDROP_CHECK,
  ],
  [ANCHOR_TX_KEY.TERRA_SEND]: [TERRA_QUERY_KEY.TOKEN_BALANCES],
};
