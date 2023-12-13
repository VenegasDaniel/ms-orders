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
    console.log(order);
    return await this.orderRepository.save(order);
  }

  async findAll() {
    const orders = await this.orderRepository.find();
    return orders;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async checkOrder(checkOrderDTO: CheckOrderDto): Promise<boolean> {
    console.log(checkOrderDTO.id);
    const order = await this.orderRepository.findOne({ 
      where: {
        id: checkOrderDTO.id
      }
    })
    console.log(order);
    if(!order.state) return true;
    return false;
  }

  async updateState(changeOrderDto: ChangeOrderDto) {
    try {
      const result = await this.orderRepository.update(changeOrderDto.id, {
        state: changeOrderDto.state,
      });
  
      if (result.affected > 0) {
        return true; 
      } else {
        return false;
      }
    } catch (error) {
      return error.message;; 
    }
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

