import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TransactionProcessor, TransactionProcessorMode } from "@multiversx/sdk-transaction-processor";

import { Locker } from '@/utils/locker';

@Injectable()
export class TransactionsProcessorCron {
  private transactionProcessor: TransactionProcessor = new TransactionProcessor();

  constructor(
    private readonly config: ConfigService,
  ) {}

  @Cron(CronExpression.EVERY_SECOND)
  async handleNewTransactions() {
    await Locker.lock('newTransactions', () => this.processBlockTransactions());
  }

  private async processBlockTransactions(){
    return await this.transactionProcessor.start({
      maxLookBehind: 1000,
      mode: TransactionProcessorMode.Hyperblock,

      //Gateway URL is either BLAST_API_GATEWAY_URL or MVX_GATEWAY_URL
      gatewayUrl: this.config.get("BLAST_API_GATEWAY_URL"),

      onTransactionsReceived: async (shardId, nonce, transactions, _statistics) => {
        //We only care about MetaChain
        if(shardId !== 4294967295) return;

        Logger.log(`Received ${transactions.length} transactions for block with nonce ${nonce}`);
      },
    });
  }
}
