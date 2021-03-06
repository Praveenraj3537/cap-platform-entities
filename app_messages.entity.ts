import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Unique } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { EntityBase } from "./cap-platform-framework/cap-platform-entitybase/entitybase";
import { AppsEntity } from "./apps.entity";
import { ApiProperty } from '@nestjs/swagger';

@Entity('app_messages')
@Unique(['Id'])
export class App_MessagesEntity extends EntityBase {
  @Column ({ name: "user_id", nullable: true })
  user_id?: number;
    
  @Column({ name: "tenant_id", nullable: true })
  tenant_id?: number;
  
  @ManyToOne(
    () => AppsEntity,
    (apps) => apps.app_message,
  )
  @JoinColumn({name: "app_id"})
  apps: AppsEntity;
 

  @Column({ name: "app_id", nullable: true })
    app_id?: number;
  
  @Column({ name: "is_notification", nullable: true })
    is_notification?: boolean;
  
  @Column({ name: "subject", nullable: true })
    subject?: string;

  @Column({ name: "message_body", nullable: true })
    message_body?: string;
  
  @Column({ name: "is_read", nullable: true })
    is_read?: boolean;
}