import { Profile } from '../profile/profile';

export interface Post {
  id: number;
  content?: string;
  excerpt?: string;
  author?: Profile;
  postedAt?: Date;
}
