import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
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

  @Column('json', { nullable: true, array: true })
    fullInfo?: MultiLanguageDTO[];

  @Column('json', { nullable: true, array: true })
    sumUpInfo?: MultiLanguageDTO[];

  @Column({ type: 'json', nullable: true })
    linkedInLink: Link;
}