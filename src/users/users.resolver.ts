import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../posts/post.entity';
import { Post as PostModel } from '../posts/post.model';
import { PostsService } from '../posts/posts.service';
import { User } from './user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) { }
  // fetch all posts from the parent user
  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Promise<PostModel[]> {
    const { id } = user;
    return this.postsService.forAuthor(id);
  }
}