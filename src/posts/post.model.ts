import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from 'src/users/user.entity';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  authorId: Types.ObjectId;

  @Prop()
  user?: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);