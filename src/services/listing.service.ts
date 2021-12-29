import { Injectable } from '@nestjs/common';
import { JobListingDto } from 'src/models/jobListingDto';
import { ListingRepository } from 'src/repos/listing.repo';
// import mapper from 'object-mapper';
var mapper = require('object-mapper');
import {
  JobListingMapping,
  JobListingMetadataMapping,
} from '../helpers/mappings';
import * as _ from 'lodash';
import { JobListingMetadataDto } from 'src/models/jobListingMetadata';
import * as uuid from 'uuid';
import * as crypto from 'crypto';

@Injectable()
export class ListingService {
  repo: ListingRepository;
  constructor(repo: ListingRepository) {
    this.repo = repo;
  }

  async handleNewListing(listing: JobListingDto) {
    listing.id = uuid.v4();
    if (typeof listing.compensation.lower === 'string') {
      listing.compensation.lower = parseInt(
        listing.compensation.lower.replace(/,/g, ''),
      );
    }
    if (typeof listing.compensation.upper === 'string') {
      listing.compensation.upper = parseInt(
        listing.compensation.upper.replace(/,/g, ''),
      );
    }

    const listingDbo = mapper(listing, JobListingMapping);
    await this.repo.insertListing(listingDbo);

    let now = new Date(Date.now()).toISOString(); //s not ms
    let hash = crypto
      .createHash('sha256')
      .update(listing.id + now)
      .digest('base64');
    const metadata: JobListingMetadataDto = {
      id: listing.id,
      approved: false,
      hidden: true,
      dateCreated: now,
      hashReceipt: hash,
    };

    const metadataDbo = mapper(metadata, JobListingMetadataMapping);
    await this.repo.insertMetaData(metadataDbo);
  }
}
