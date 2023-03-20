import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FingerprintModule } from './fingerprint/fingerprint.module';

@Module({
  imports: [AuthModule, FingerprintModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
