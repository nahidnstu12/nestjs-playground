import { Module } from '@nestjs/common';
import { dbProviders } from './app-config.provider';
// database module config
@Module({
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class AppConfigModule {}
