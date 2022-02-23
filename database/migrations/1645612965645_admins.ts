import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
   protected tableName = 'admins'

   public async up() {
      this.schema.createTable(this.tableName, (table) => {
         table.increments('id')

         table.string('name', 50).notNullable()
         table.string('email', 100).notNullable().unique()
         table.string('password', 180).notNullable()
         table.string('remember_me_token').nullable()

         /**
          * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
          */
         table.timestamp('created_at', { useTz: true })
         table.timestamp('updated_at', { useTz: true })
      })
   }

   public async down() {
      this.schema.dropTable(this.tableName)
   }
}
