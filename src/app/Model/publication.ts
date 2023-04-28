import { User } from "./user";

export class Publication{
    id_pb!:number;
    titre!:String;
    contenu!:String;
    photo!:any;
    likecount!: number;
    dislikecount!:number;
    commentsNumber!:number;
    user!:User; 
}