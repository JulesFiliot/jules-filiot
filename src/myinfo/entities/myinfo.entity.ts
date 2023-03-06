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

  @Column('jsonb', { nullable: true })
    fullInfo?: MultiLanguageDTO[];

  @Column('jsonb', { nullable: true })
    sumUpInfo?: MultiLanguageDTO[];

  @Column({ type: 'jsonb', nullable: true })
    linkedInLink: Link;
}