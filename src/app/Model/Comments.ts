import { Publication } from "./publication";
import { User } from "./user";

export class Comment{
    id_cm!:number;
    contenu_cm!:String;
    date_cm!:Date;
    publication!:Publication;
    user!:User;
}