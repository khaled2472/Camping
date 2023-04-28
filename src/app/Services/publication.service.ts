import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../Model/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }
  public AddPublication(pub:Publication,id:any){
    return this.http.post("http://localhost:8094/SpringMVC/Publication/addPub"+id,pub);
  }
  public updatePublication(pub:Publication,id_cm:any){
    return this.http.put("http://localhost:8094/SpringMVC/Publication/updatePub"+pub,id_cm);
  }
  public likePublication(id_pb:number,user_id:number){
    return this.http.post("http://localhost:8094/SpringMVC/like/{{id_pb}}/{{id}}"+id_pb,user_id);
  }
  public dislikePublication(id_pb:number,user_id:number){
    return this.http.post("http://localhost:8094/SpringMVC/dislike/{{id_pb}}/{{id}}"+id_pb,user_id);
  }


}
