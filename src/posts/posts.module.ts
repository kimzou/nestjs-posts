import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './../users/users.module';
import { Post, PostSchema } from './post.model';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  imports: [
    // GraphQLFederationModule.forRoot({
    //   buildSchemaOptions: {
    //     orphanedTypes: [User],
    //   },
    // }),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    UsersModule
  ],
  providers: [PostsResolver, PostsService],
  exports: [PostsService, PostsResolver]
})
export class PostsModule {}
