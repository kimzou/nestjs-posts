import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from '../posts/post.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  @Directive('@external')
  id: number;
  posts?: Post[];
}