import { Model } from 'sequelize';

export interface JobListingDto {
  id: string;
  positionTitle: string;
  experienceRequired: string;
  positionType: string;
  workingArrangement: string;
  positionCategory: string[];
  technologies: string[];
  compensation: {
    lower: number | string;
    upper: number | string;
    period: string;
    hasEquity: boolean;
    hasBonus: boolean;
    hasCrypto: boolean;
    hasOther: boolean;
    equity: string;
    annualBonus: string;
    crypto: string;
    currency: string;
    other: string;
  };
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  remoteOnlyLocation: boolean;
  contactEmail: string;
  invoiceEmail: string;
  organisationFocus: string;
  companyWebsite: string;
  organisationType: string;
  jobDescription: string;
}

export interface JobListingDbo extends Model {
  id: string;
  position_title: string;
  experience_required: string;
  position_type: string;
  working_arrangement: string;
  position_category: string[];
  technologies: string[];
  comp_lower: number;
  comp_upper: number;
  comp_period: string;
  comp_has_equity: boolean;
  comp_has_bonus: boolean;
  comp_has_crypto: boolean;
  comp_has_other: boolean;
  comp_equity: string;
  comp_bonus: string;
  comp_crypto: string;
  comp_currency: string;
  comp_other: string;
  company_name: string;
  company_logo: File;
  company_location: string;
  company_remote_only: boolean;
  contact_email_or_site: string;
  invoice_email: string;
  organisation_focus: string;
  company_website: string;
  organisation_type: string;
  job_description: string;
}
