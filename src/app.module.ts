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
import { ListingController } from './controllers/listing.controller';
import { ListingService } from './services/listing.service';
import { ListingRepository } from './repos/listing.repo';
import { DbConnectionService } from './repos/db-connection.service';

@Module({
  imports: [AuthModule, SupabaseModule],
  controllers: [AppController, UserController, ListingController],
  providers: [
    AppService,
    UserService,
    SupabaseService,
    ListingService,
    ListingRepository,
    DbConnectionService,
  ],
  exports: [SupabaseService],
})
export class AppModule {}
