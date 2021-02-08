import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { PostsResolver } from './posts/posts.resolver';
import { PostsService } from './posts/posts.service';
import { User } from './users/user.entity';
import { UsersResolver } from './users/users.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: 'schema.graphql',
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule { }