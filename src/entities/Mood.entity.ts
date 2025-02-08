import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reason } from './Reason.entity';

@Entity('moods')
export class Mood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int', nullable: false })
  rating: number;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

  @ManyToMany(() => Reason, { cascade: true })
  @JoinTable({
    name: 'moods_reasons',
    joinColumn: {
      name: 'mood_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'reason_id',
      referencedColumnName: 'id',
    },
  })
  reasons: Reason[];

  @CreateDateColumn()
  createdAt: Date;
}
