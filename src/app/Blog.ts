import {User} from './User';

export interface Blog {
   postId: number;
   date: Date;
   title: string;
   content: string;
   userId: User;
   private: boolean;
}
