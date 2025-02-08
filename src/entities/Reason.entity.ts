import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reasons')
export class Reason {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
