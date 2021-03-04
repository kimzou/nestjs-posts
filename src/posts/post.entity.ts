import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';

@ObjectType()
@Directive('@key(fields: "id authorId")')
// @Directive('@key(fields: "id")')
export class Post {
  @Field((type) => ID)
  id: string;
  title: string;
  authorId: string;
  user: User;
}