import {Column, Entity, Index, PrimaryGeneratedColumn, TableInheritance} from 'typeorm';
import {MediaEntity} from '../MediaEntity';
import {columnCharsetCS} from '../EntityUtils';
import {AlbumBaseDTO} from '../../../../../../common/entities/album/AlbumBaseDTO';

@Entity()
@TableInheritance({column: {type: 'varchar', name: 'type', length: 24}})
export class AlbumBaseEntity implements AlbumBaseDTO {

  @Index()
  @PrimaryGeneratedColumn({unsigned: true})
  id: number;

  @Index()
  @Column(columnCharsetCS)
  name: string;

  // not saving to database, it is only assigned when querying the DB
  public preview: MediaEntity;

}
