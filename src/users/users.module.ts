import { Module } from '@nestjs/common';
import { PostsModule } from './../posts/posts.module';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [PostsModule],
  providers: [UsersResolver],
  // exports: [UsersResolver]
})
export class UsersModule {}
