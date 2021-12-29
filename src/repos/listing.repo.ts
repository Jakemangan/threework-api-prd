import { Injectable } from '@nestjs/common';
import { PoolClient } from 'pg';
import { JobListingDbo } from 'src/models/jobListingDto';
import pgp from 'pg-promise';
import { DbConnectionService } from 'src/repos/db-connection.service';
import { JobListingMetadataDbo } from 'src/models/jobListingMetadata';
// const pgp = require('pg-promise')();

@Injectable()
export class ListingRepository {
  db: DbConnectionService;
  constructor(db: DbConnectionService) {
    this.db = db;
  }

  async insertListing(listingDbo: JobListingDbo) {
    await this.db.knex
      .insert(listingDbo)
      .into('listings')
      .then((res) => {
        console.log(res);
      });
  }

  async insertMetaData(metadataDbo: JobListingMetadataDbo) {
    this.db.knex
      .insert(metadataDbo)
      .into('listings_metadata')
      .then((res) => {
        console.log(res);
      });
  }
}
