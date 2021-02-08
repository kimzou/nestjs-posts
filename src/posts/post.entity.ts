import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../users/user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field((type) => ID)
  id: number;
  title: string;
  authorId: number;
  user?: User;
}