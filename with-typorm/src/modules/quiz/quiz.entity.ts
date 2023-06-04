import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizes')
export class Quizes extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'the quiz uniq identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
  })
  isActive: boolean;
}
