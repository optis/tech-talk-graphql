import { Profile } from '../profile/profile';

export interface Post {
  id: number;
  content?: string;
  author?: Profile;
  postedAt?: Date;
}
