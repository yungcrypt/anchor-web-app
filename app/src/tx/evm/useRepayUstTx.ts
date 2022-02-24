import { StreamReturn } from '@rx-stream/react';
import { useEthCrossAnchorSdk } from 'crossanchor';
import { useEvmWallet } from '@libs/evm-wallet';
import { TxResultRendering } from '@libs/app-fns';
import { useTx } from './useTx';
import { toWei, txResult, TX_GAS_LIMIT } from './utils';
import { Subject } from 'rxjs';
import { useCallback } from 'react';
import { CrossChainTxResponse } from '@anchor-protocol/crossanchor-sdk';
import { ContractReceipt } from 'ethers';

type TxResult = CrossChainTxResponse<ContractReceipt> | null;
type TxRender = TxResultRendering<TxResult>;

export interface RepayUstTxProps {
  amount: string;
}

export function useRepayUstTx():
  | StreamReturn<RepayUstTxProps, TxRender>
  | [null, null] {
  const { provider, address, connection, connectType } = useEvmWallet();
  const ethSdk = useEthCrossAnchorSdk('testnet', provider);

  const repayTx = useCallback(
    (txParams: RepayUstTxProps, renderTxResults: Subject<TxRender>) => {
      return ethSdk.repayStable(
        toWei(txParams.amount),
        address!,
        TX_GAS_LIMIT,
        (event) => {
          console.log(event, 'eventEmitted');

          renderTxResults.next(txResult(event, connectType));
        },
      );
    },
    [ethSdk, address, connectType],
  );

  const repayTxStream = useTx(repayTx, (resp) => resp.tx, null);

  return connection && address ? repayTxStream : [null, null];
}
