import { Link } from 'src/common/classes/link';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MyInfo {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ nullable: false })
    firstName: string;

  @Column({ nullable: false })
    lastName: string;

  @Column({ nullable: false })
    email: string;

  @Column('text', { nullable: true, array: true })
    fullInfo: string[];

  @Column('text', { nullable: true, array: true })
    sumUpInfo: string[];

  @Column({ type: 'json', nullable: true })
    linkedInLink: Link;
}