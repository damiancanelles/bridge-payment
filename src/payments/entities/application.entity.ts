import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Application extends Model<Application> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    key: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    secret: string;

    @Column({
        type: DataType.ENUM,
        values: ['web', 'movil'],
        allowNull: false,
    })
    type: string;
}