import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Panel } from './panel.entity';

@Entity()
export class PanelEntry {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'jsonb' })
    title: MultiLanguageDTO;

  @Column({ type: 'jsonb'})
    subtitle: MultiLanguageDTO;

  @Column('jsonb', { nullable: true }) 
    description?: MultiLanguageDTO[];

  @Column()
    startDate: Date;

  @Column({ nullable: true })
    endDate: Date;

  @Column('jsonb', { nullable: true, array: true })
    externalLinks: Link[];

  @ManyToOne(
    () => Panel,
    panel => panel.panelEntries,
  )
  @JoinColumn({ referencedColumnName: 'id' })
    panel: Panel;

  @Column({ nullable: true })
    panelId: number;
}
