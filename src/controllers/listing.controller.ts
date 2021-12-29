import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { JobListingDto } from 'src/models/jobListingDto';
import mapper from 'object-mapper';
import { FileInterceptor } from '@nestjs/platform-express';
import { ListingService } from 'src/services/listing.service';

@Controller('listing')
export class ListingController {
  listingService: ListingService;
  constructor(listingService: ListingService) {
    this.listingService = listingService;
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async postListing(@Body() dto: JobListingDto) {
    console.log('/listing triggered with: ', dto);
    console.log('db url: ', process.env.DATABASE_URL);
    this.listingService.handleNewListing(dto);
  }
}
