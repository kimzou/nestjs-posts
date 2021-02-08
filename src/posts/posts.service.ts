import { Injectable } from '@nestjs/common';
import { User } from './../users/user.entity';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    { id: 1, title: 'Is Mappa\'s good ?', authorId: 1 },
    { id: 2, title: 'Can\'t wait for the final ?', authorId: 2}
  ];

  all(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    return this.posts.filter(post => post.id === id)[0];
  }

  async forAuthor(user: User): Promise<Post[]> {
    // const author = await this.usersService.findById(userId);
    console.log(user)
    return user.posts;
    // return this.posts;
  }
}
