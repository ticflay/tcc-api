import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    tableName: 'criteria',
})
export class Criteria extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    description?: string;
}
