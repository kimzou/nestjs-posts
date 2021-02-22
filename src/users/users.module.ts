import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post } from './../posts/post.entity';
import { PostSchema } from './../posts/post.model';
import { PostsService } from './../posts/posts.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [UsersResolver, PostsService],
  exports: [UsersResolver]
})
export class UsersModule {}
