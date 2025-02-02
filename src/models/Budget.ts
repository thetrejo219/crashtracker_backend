import {Table,Column,Model,DataType,HasMany,BelongsTo,ForeignKey} from 'sequelize-typescript'

@Table({
    tableName:'budgets'
})

class Budget extends Model{
    @Column({
        type: DataType.STRING(100)
    })
    name:string
    @Column({
        type: DataType.DECIMAL
    })
    amount:string
}

export default Budget