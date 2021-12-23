import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { AuthModule } from './modules/auth.module';
import { AuthService } from './services/auth.service';
import { SupabaseService } from './services/supabase.service';
import { UserService } from './services/user.service';
import { SupabaseModule } from './modules/supabase.module';

@Module({
  imports: [AuthModule, SupabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, SupabaseService],
  exports: [SupabaseService],
})
export class AppModule {}
