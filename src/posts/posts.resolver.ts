import { Args, Mutation, Parent, Query, ResolveField, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from 'src/users/user.entity';
import { CreatePostInput } from './dto/create-post.input';
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
  // TODO: add user decorator to access current user
  @Mutation(returns => Post)
  addPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
    @Args('authorId') authorId: string
  ): Promise<PostModel> {
    return this.postsService.create({ createPostInput, authorId });
  }

  @Query((returns) => Post)
  getPost(@Args('id') id: string): Promise<PostModel|null> {
    return this.postsService.findById(id);
  }

  @Query((returns) => [Post])
  getPosts(): Promise<PostModel[]> {
    return this.postsService.all();
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string, id: string, authorId: string }): Promise<PostModel> {
    console.log('######### reference', reference)
    if (reference.id === undefined) throw new Error('Post not found')
    const { id, authorId } = reference;
    return this.postsService.findById(id);
  }
}