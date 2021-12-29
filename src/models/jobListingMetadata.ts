export interface JobListingMetadataDto {
  id: string;
  dateCreated: string;
  approved: boolean;
  hidden: boolean;
  hashReceipt: string;
}

export interface JobListingMetadataDbo {
  id: string;
  approved: boolean;
  hidden: boolean;
  hash_receipt: string;
  date_created: string;
}
