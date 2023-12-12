import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from '../../entities/booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeBookingDto } from './dto/change-booking.dto';
import { CheckBookingDto } from './dto/check-booking.dto';

@Injectable()
export class BookingsService {

  constructor(@InjectRepository(Booking) private bookingRepository: Repository<Booking>) {
    
  }
  
  async create(createBookingDto: CreateBookingDto) {
    const booking = this.bookingRepository.create(createBookingDto);
    return await this.bookingRepository.save(booking);
  }

  async findAll() {
    const bookings = await this.bookingRepository.find();
    return bookings;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  async checkBooking(checkBookingDTO: CheckBookingDto): Promise<boolean> {
    console.log(checkBookingDTO.id);
    const booking = await this.bookingRepository.findOne({ 
      where: {
        id: checkBookingDTO.id
      }
    })
    console.log(booking);
    if(!booking.state) return true;
    return false;
  }

  async updateState(changeBookingDto: ChangeBookingDto) {
    try {
      const result = await this.bookingRepository.update(changeBookingDto.id, {
        state: changeBookingDto.state,
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
    return `This action removes a #${id} booking`;
  }
}

