import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'books' })
export class Book extends Model<Book> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING(60), allowNull: false })
  code: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price: number;
}
