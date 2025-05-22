import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IUser } from '../interfaces/user.interface'

@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id?:number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ type: 'date'})
    dateOfBirth: string;

    @Column()
    gender: string;
}