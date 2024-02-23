import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Criteria } from "./criteria";


@Table({
    tableName: 'category',
    
})
export class Category extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;
    @Column({
        type: DataType.TEXT('long'),
        allowNull: false,
    })
    identifier!: string;
    @ForeignKey(() => Criteria)
    @Column({
        type: DataType.INTEGER
    })
    criteriaId!: number;
    @BelongsTo(() => Criteria, 'criteriaId')
    criteria!: Criteria;
}
