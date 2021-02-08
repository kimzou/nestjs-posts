import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './../users/user.entity';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query((returns) => Post)
  findPost(@Args('id') id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  getPosts(): Post[] {
    return this.postsService.all();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}