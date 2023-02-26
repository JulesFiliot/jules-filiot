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

  @Column({ nullable: true })
    fullInfo: string[];

  @Column({ nullable: true })
    sumUpInfo: string[];

  @Column({ nullable: true })
    linkedInLink: Link;
}