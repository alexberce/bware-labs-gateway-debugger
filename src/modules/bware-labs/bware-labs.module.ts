import { Module } from '@nestjs/common';

/** Local Imports **/
import { TransactionsProcessorCron } from './crons/transactions-processor.cron';

@Module({
  providers: [TransactionsProcessorCron],
})
export default class BwareLabsModule {}
