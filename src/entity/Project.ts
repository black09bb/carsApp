import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {User} from './User'

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    price: string;

    @ManyToMany(type => User, user => user.projects)
    users: User[]
}
