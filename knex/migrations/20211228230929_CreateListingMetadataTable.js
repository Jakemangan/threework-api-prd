
exports.up = async function(knex) {
  await knex.raw(`
  create table listings_metadata (
    id uuid default extensions.uuid_generate_v4() not null,
    date_created date default current_timestamp not null,
	approved boolean default false not null,
	hidden boolean default false not null,
	hash_receipt varchar(256) not null
  );

  create unique index listings_metadata_id_uindex
	on listings_metadata (id);

    alter table listings_metadata
	add constraint listings_metadata_pk
		primary key (id);
  `)
};

exports.down = function(knex) {
  
};
