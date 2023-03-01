import { Link } from 'src/common/classes/link';
import { MultiLanguageDTO } from 'src/common/classes/multi-language-dto';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Panel } from './panel.entity';

@Entity()
export class PanelEntry {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({ type: 'json' })
    title: MultiLanguageDTO;

  @Column('json', { array: true })
    subtitle: MultiLanguageDTO;

  @Column('json', { nullable: true, array: true }) 
    description?: MultiLanguageDTO[];

  @Column()
    startDate: Date;

  @Column({ nullable: true })
    endDate: Date;

  @Column('json', { nullable: true, array: true })
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
