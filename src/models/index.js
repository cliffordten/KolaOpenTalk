// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Followering, Follower, UserBlackList, Interest, Category, Post, Comment, Like } = initSchema(schema);

export {
  User,
  Followering,
  Follower,
  UserBlackList,
  Interest,
  Category,
  Post,
  Comment,
  Like
};