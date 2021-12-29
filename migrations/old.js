/* eslint-disable camelcase */
exports.up = pgm => {
    pgm.createTable('listings', {
        id: {
            type: 'id',
            notNull: true,
            default: pgm_func('uuid_generate_v4')
        },
        positionTitle: {
            type: 'varchar(256)',
            notNull: true
        },
        experienceRequired: {
            type: 'varchar(32)',
            notNull: true
        },
        positionType: {
            type: 'varchar(32)',
            notNull: true
        },
        positionCategory: {
            type: 'varchar[]',
            notNull: true
        },
        technologies: {
            type: 'varchar[]',
            notNull: true
        },
        compensationLower: {
            type: 'varchar(32)',
            notNull: true
        },
        compensationUpper: {
            type: 'varchar(32)',
            notNull: true
        },
        compensationPeriod: {
            type: 'varchar(16)',
            notNull: true
        },
        compensationHasBonus: {
            type: 'boolean',
            notNull: true
        },
        compensationBonus: {
            type: 'varchar(256)',
            notNull: true
        },
        compensationHasEquity: {
            type: 'boolean',
            notNull: true
        },
        compensationEquity: {
            type: 'varchar(256)',
            notNull: true
        },
        compensationHasCrypto: {
            type: 'boolean',
            notNull: true
        },
        compensationCrypto: {
            type: 'varchar(256)',
            notNull: true
        },
        compensationHasOther: {
            type: 'boolean',
            notNull: true
        },
        compensationOther: {
            type: 'varchar(256)',
            notNull: true
        },
        compensationCurrency: {
            type: 'varchar(3)',
            notNull: true
        },
        companyName: {
            type: 'varchar(128)',
            notNull: true
        },
        companyLogo: {
            type: 'bytea',
            notNull: true
        },
        companyLocation: {
            type: 'varchar(128)',
            notNull: true
        },
        remoteOnlyLocation: {
            type: 'boolean',
            notNull: true
        },
        contactEmail: {
            type: 'varchar(128)',
            notNull: true
        },
        invoiceEmail: {
            type: 'varchar(128)',
            notNull: true
        },
        organisationFocus: {
            type: 'varchar[]',
            notNull: true
        },
        companyWebsite: {
            type: 'varchar(128)',
            notNull: true
        },
        organisationType: {
            type: 'varchar(32)',
            notNull: true
        },
        jobDescription: {
            type: 'varchar(65536)',
            notNull: true
        }
    });

    pgm.createTable('listings_metadata', {
        id: {
            type: 'id',
            notNull: true,
            default: pgm_func('uuid_generate_v4')
        },
        dateCreated: {
            type: 'timestamp',
            notNull: true,
            default: pgm_func('current_timestamp')
        },
        approved: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        hidden: {
            type: 'boolean',
            notNull: true,
            default: 'true'
        },
        hashReceipt: {
            type: 'varchar(256)',
            notNull: true,
            default: ''
        },
    });
};

exports.down = pgm => {
    pgm.dropTable('listings');
    pgm.dropTable('listings_metadata');s
};
