import { Reply } from "./reply.model";


export class Comment {
    id!: number;
    content!: string;
    replies!: Reply[];
  }