import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Panel } from './panel.entity';

@Entity()
export class PanelEntry {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    title: string;

  @Column()
    subtitle: string;

  @Column('text', { nullable: true, array: true }) 
    description: string[];

  @Column()
    startDate: Date;

  @Column({ nullable: true })
    endDate: Date;

  @Column({ nullable: true })
    externalLink: string;

  @ManyToOne(
    () => Panel,
    panel => panel.panelEntries,
  )
  @JoinColumn({ referencedColumnName: 'id' })
    panel: Panel;

  @Column({ nullable: true })
    panelId: number;
}
