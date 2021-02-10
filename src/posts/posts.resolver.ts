import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './../users/user.entity';
import { Post } from './post.entity';
import { Post as PostModel } from './post.model';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  // @Query((returns) => Post)
  // findPost(@Args('id') id: number): Post {
  //   return this.postsService.findOne(id);
  // }

  @Query((returns) => Post)
  getPost(@Args('id') id: string): Promise<PostModel> {
    return this.postsService.findById(id);
  }

  @Query((returns) => [Post])
  getPosts(): Promise<PostModel[]> {
    return this.postsService.all();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    console.log('post resolver users root', {post})
    return { __typename: 'User', id: post.authorId };
  }
}