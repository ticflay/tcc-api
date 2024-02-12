import { Table, Model, Column, DataType,IsEmail, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Category } from "./category";


@Table({
    tableName: 'question',

})
export class Question extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;
    @Column({
        type: DataType.TEXT('long'),
        allowNull: true,
    })
    description?: string;
    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER
    })
    categoryId!: number;
    @BelongsTo(() => Category, 'categoryId')
    category!: Category;
    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    required?: boolean;
}
