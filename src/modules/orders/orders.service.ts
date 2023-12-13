import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from '../../entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeOrderDto } from './dto/change-order.dto';
import { CheckOrderDto } from './dto/check-order.dto';

@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {
    
  }
  
  async create(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    return await this.orderRepository.save(order);
  }

  async findAll() {
    const orders = await this.orderRepository.find();
    return orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

