import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './modules/orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig
    }),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

