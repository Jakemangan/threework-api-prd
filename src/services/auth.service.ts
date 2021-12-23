import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SupabaseService } from './supabase.service';

@Injectable()
export class AuthService {
  constructor(
    private supabase: SupabaseService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const { user, error } = await this.supabase.supabase.auth.signIn({
      email,
      password,
    });
    if (user && !error) {
      let payload = {
        email: email,
        sub: user.id,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      return null;
    }
  }
}
