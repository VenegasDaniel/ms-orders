import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ChangeOrderDto } from './dto/change-order.dto';
import { CheckOrderDto } from './dto/check-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) { 
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }

  @Get()
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Post('checkOrder')
  async checkOrder(@Body() checkOrderDto: CheckOrderDto) {
    return await this.ordersService.checkOrder(checkOrderDto)
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}