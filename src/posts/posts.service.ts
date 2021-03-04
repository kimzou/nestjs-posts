import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post as PostModel, PostDocument } from './post.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel.name) private postModel: Model<PostDocument>,
  ) {}

  //TODO: get author id from user decorator
  async create({ createPostInput, authorId }): Promise<PostModel> {
    const { title } = createPostInput
    const postProp = {
      authorId,
      title
    }
    const newPost = new this.postModel(postProp)
    return await newPost.save()
  }

  async all(): Promise<PostModel[]> {
    const posts = await this.postModel.find();
    console.log('all', {posts})
    return posts;
  }

  // async findOne(id: number): Promise<PostModel> {
  //   const post = await this.postModel.findOne({...filters})
  // }

  async findById(id: string): Promise<PostModel|null> {
    const post = await this.postModel.findById(id);
    console.log('findById', {post})
    return post;
  }

  async find(id: string): Promise<PostModel[]> {
    return await this.postModel.find({ _id : id })
  }
  // return all posts for an user id
  async forAuthor(id: string): Promise<PostModel[]> {
    const posts = await this.postModel.find({ authorId: id })
    console.log('post service for author', {posts})
    return posts;
  }
}
