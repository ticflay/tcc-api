import { Table, Model, Column, DataType,IsEmail } from "sequelize-typescript";


@Table({
    tableName: 'user',
    scopes: {
        noPassword: {
            attributes: { exclude: ['password']}
        }
    }
})
export class User extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;
    @IsEmail
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: true
    })
    telephone?: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;
    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    lastLogin?: string;
    @Column({
        type: DataType.ENUM('admin', 'member',),
        allowNull: false
    })
    type!: 'admin'| 'member';

}
