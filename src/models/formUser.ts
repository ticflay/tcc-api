import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user";


@Table({
    tableName: 'formUser',
    paranoid: true
})
export class FormUser extends Model {

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER
    })
    userId!: number;
    @BelongsTo(() => User, 'userId')
    user!: User;
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    finished!: boolean;
}
