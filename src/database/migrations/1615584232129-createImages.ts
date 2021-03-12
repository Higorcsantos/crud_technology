import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1615584232129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
            columns:[
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary:true
                },
                {
                    name: 'path',
                    type:'varchar',
                },
                {
                    name: "technology_id",
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'imageTechnology',
                    columnNames: ['technology_id'],
                    referencedTableName: 'technologies',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: "CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("images");
    }

}
