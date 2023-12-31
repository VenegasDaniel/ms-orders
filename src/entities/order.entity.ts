import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({
    name: "orders"
})
export class Order {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    priceTotal: number;

    @Column()
    stringList: string;

    @Column()
    ubication: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column()
    userId: string;

}