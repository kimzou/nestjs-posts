import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../posts/post.entity';
import { PostsService } from '../posts/posts.service';
import { User } from './user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) { }

  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Promise<Post[]> {
    return this.postsService.forAuthor(user);
  }
}