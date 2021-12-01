import { Module } from '@nestjs/common';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentsService } from './services/payments.service';
import { applicationsProviders } from './payments.provider';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports:[HttpModule],
    providers: [PaymentsService, ...applicationsProviders],
    exports: [PaymentsService],
    controllers: [PaymentsController]
})
export class PaymentsModule {}
