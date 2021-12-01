import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { PaymentsModule } from './payments/payments.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

config()
@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),PaymentsModule,DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
