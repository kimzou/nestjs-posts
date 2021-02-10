import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post as PostModel, PostDocument } from './post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel.name) private postModel: Model<PostDocument>,
  ) {}

  async all(): Promise<PostModel[]> {
    const posts = await this.postModel.find();
    console.log({posts})
    return posts;
  }

  // async findOne(id: number): Promise<PostModel> {
  //   const post = await this.postModel.findOne({...filters})
  // }

  async findById(id: string): Promise<PostModel> {
    const post = await this.postModel.findById(id);
    console.log({post})
    return post;
  }

  async forAuthor(id: string): Promise<PostModel[]> {
    // const author = await this.usersService.findById(userId);
    console.log('post service for author', {id})
    const posts = await this.postModel.find({ authorId: id })
    console.log('post service for author', {posts})
    // console.log('user post', user.posts)
    // return user.posts;

    return posts;
  }
}
