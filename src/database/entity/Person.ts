import { Column, Entity, PrimaryColumn } from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  DOCTOR = "doctor",
  PATIENT = "patient",
}

@Entity()
export abstract class Person {
  @PrimaryColumn()
  id: string;

  @Column({ type: "varchar", nullable: false, length: 100 })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.PATIENT,
    nullable: false,
  })
  role: UserRole;

  @Column({ name: 'created_At', type: "timestamptz", default: "now()" })
  createdAt: Date;

	@Column({ name: 'updated_At', type: "timestamptz", nullable: true })
  updatedAt: Date;
}
