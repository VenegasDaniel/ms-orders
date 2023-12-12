import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({
    name: "order"
})
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    priceTotal: number;

    @Column('boolean', {default: false})
    state: boolean;

    @Column('simple-array', { nullable: true })
    stringList: string[];

    @Column()
    ubication: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

}