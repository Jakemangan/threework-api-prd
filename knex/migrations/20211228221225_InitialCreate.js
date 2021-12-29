
exports.up = async function(knex) {
  await knex.raw(`
  create table listings
  (
      id uuid default extensions.uuid_generate_v4() not null,
      position_title varchar(128) not null,
      experience_required varchar(32) not null,
      position_type varchar(32) not null,
      working_arrangement varchar(32) not null,
      position_category varchar[] default array[]::varchar[] not null,
      technologies varchar[] default array[]::varchar[] not null,
      comp_lower int not null,
      compensation_upper int not null,
      compensation_period varchar(32) not null,
      comp_has_equity boolean default false not null,
      comp_equity varchar(256),
      comp_has_crypto boolean default false not null,
      comp_crypto varchar(256) not null,
      comp_has_bonus boolean default false not null,
      comp_bonus varchar(256) not null,
      comp_has_other boolean default false not null,
      comp_other varchar(256) not null,
      company_name varchar(128) not null,
      company_logo bytea not null,
      company_location varchar(128) not null,
      company_remote_only boolean default false not null,
      contact_email_or_site varchar(256) not null,
      invoice_email varchar(128) not null,
      organisation_focus varchar[] default array[]::varchar[] not null,
      company_website varchar(256),
      organisation_type varchar(16) not null,
      job_description varchar(65536) not null
  );
  
  create unique index listings_id_uindex
      on listings (id);
  
  alter table listings
      add constraint listings_pk
          primary key (id);
  `)
};

exports.down = function(knex) {
  
};
