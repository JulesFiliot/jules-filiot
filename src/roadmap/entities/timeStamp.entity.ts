import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Roadmap } from './roadmap.entity';

// TODO add subtitle + change description to array of strings instead of a single string
@Entity()
export class TimeStamp {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    title: string;

  @Column({ nullable: true })
    description: string;

  @Column()
    startDate: Date;

  @Column({ nullable: true })
    endDate: Date;

  @Column({ nullable: true })
    externalLink: string;

  @ManyToOne(
    () => Roadmap,
    roadmap => roadmap.timeStamps,
  )
  @JoinColumn({ referencedColumnName: 'id' })
    roadmap: Roadmap;

  @Column({ nullable: true })
    roadmapId: number;
}
