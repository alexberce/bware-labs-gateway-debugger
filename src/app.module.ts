import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { validate } from '@/config/validation';
import BwareLabsModule from '@/modules/bware-labs/bware-labs.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ validate, isGlobal: true }),

    BwareLabsModule,
  ],
})
export default class AppModule {}
