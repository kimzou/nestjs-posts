import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/users/user.entity';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: 'schema.graphql',
      cors: {
        credentials: true,
        origin: 'http://localhost:3000'
      },
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        orphanedTypes: [User],
      },
    }),
    PostsModule,
    UsersModule,
  ],
  // providers: [PostsResolver, UsersResolver, PostsService],
})
export class AppModule {}