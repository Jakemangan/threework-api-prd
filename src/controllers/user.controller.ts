import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FirstLastNameDto } from 'src/models/firstLastNameDto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  get() {
    return 'User';
  }

  // @UseGuards(JwtAuthGuard)
  @Post('basic')
  async postFirstAndLastName(@Body() dto: FirstLastNameDto) {
    await this.userService.addFirstAndLastNameForUser(dto.uuid, dto.first, dto.last);
  }
}
