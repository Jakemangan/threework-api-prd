import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('validate')
  async validateUser(
    @Body()
    validateUserDto: {
      email: string;
      password: string;
    },
    @Res() response: Response,
  ) {
    let result = await this.authService.validateUser(
      validateUserDto.email,
      validateUserDto.password,
    );
    if (!result) {
      return response.status(HttpStatus.UNAUTHORIZED).send();
    } else {
      return response.status(HttpStatus.OK).json(result);
    }
  }
}
