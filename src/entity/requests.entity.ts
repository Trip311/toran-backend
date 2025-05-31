import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IRequest } from '../interfaces/request.interface'

@Entity()
export class Request implements IRequest {

    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    fromUser: string;

    @Column({ type: 'date'})
    fromDate: string;

    @Column({ nullable: true })
    toUser?: string;

    @Column({ type: 'date', nullable: true })
    toDate?: string;

    @Column()
    shiftType: 'jira' | 'kitchen';

    @Column()
    reason: string;

}