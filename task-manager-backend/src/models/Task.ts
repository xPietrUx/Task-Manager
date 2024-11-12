import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Task extends Model {
  public id!: number;
  public title!: number;
  public description!: string;
  public completed!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'tasks',
  }
);

export default Task;
