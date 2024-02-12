import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Question } from "./question";
import { FormUser } from "./formUser";

export type AnswerType = 'true' | 'false' | 'NA'

@Table({
    tableName: 'answerForm',
    paranoid: true
})
export class AnswerForm extends Model {
    @Column({
        type: DataType.ENUM('true', 'false', 'NA'),
        allowNull: false
    })
    answer!: AnswerType;
    @ForeignKey(() => Question)
    @Column({
        type: DataType.INTEGER
    })
    questionId!: number;
    @BelongsTo(() => Question, 'questionId')
    question!: Question;
    @ForeignKey(() => FormUser)
    @Column({
        type: DataType.INTEGER
    })
    formUserId!: number;
    @BelongsTo(() => FormUser, 'formUserId')
    formUser!: FormUser;
}
