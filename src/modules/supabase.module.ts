import { Module } from '@nestjs/common';
import { SupabaseService } from 'src/services/supabase.service';

@Module({
    imports: [
      ],
      providers: [SupabaseService],
      exports: [SupabaseService],
})
export class SupabaseModule {}
