import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  public addFirstAndLastNameForUser = async (
    uuid: string,
    first: string,
    last: string,
  ) => {
    const { data, error } = await this.supabaseService.supabase
      .from('profiles')
      .insert([
        {
          id: uuid,
          first_name: first,
          last_name: last,
        },
      ]);
  };
}
