import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ChangeBookingDto } from './dto/change-booking.dto';
import { CheckBookingDto } from './dto/check-booking.dto';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post('create')
  create(@Body() createBookingDto: CreateBookingDto) { 
    return this.bookingsService.create(createBookingDto);
  }


  @Get('findAll')
  async findAll() {
    return this.bookingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(+id);
  }

  @Post('checkBooking')
  async checkBooking(@Body() checkBookingDto: CheckBookingDto) {
    return await this.bookingsService.checkBooking(checkBookingDto)
  }

  @Patch('updateState')
  async updateState(@Body() changeBookingDto: ChangeBookingDto): Promise<boolean | string>  {
    try {
      const result = await this.bookingsService.updateState(changeBookingDto);  
      if (result === true) {
        return true; 
      } else if (result === false) {
        console.log('No booking found with the provided id')
      } else {
        console.log('Error updating booking state');
      }
    } catch (error) {
      throw new error(error.message);
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingsService.remove(+id);
  }
}