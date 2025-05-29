import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IEvent } from '../interfaces/event.interface'

@Entity()
export class Event implements IEvent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: 'jira' | 'kitchen'

    @Column()
    username: string

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    startDate: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    endDate: Date;

    @Column()
    note: string;

    @Column({ nullable: true })
    repeatGroupId?: string;


}