import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminController } from './cache.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [AppController, AdminController],
})
export class AppModule {}
