import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 255 })
  name_company: string;

  @Column({ length: 20, unique: true })
  cnpj_company: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 20, nullable: true })
  telephone: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  foundation_date: Date;
}
