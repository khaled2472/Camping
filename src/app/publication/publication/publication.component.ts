import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from 'src/app/Model/publication';
import { User } from 'src/app/Model/user';
import { PublicationService } from 'src/app/Services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  nbre!:number;
  pub!:Publication[];
  retrievedImage: any;
  user!:User[];
  p:number = 1;
  users:number[] = [1,2,3,4];
  selectedFile!: File;
  name:string = '';
  title:string = '';
text:string = '';
  constructor(private httpClient:HttpClient,
    private service : PublicationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addpub(){
    let publ = new Publication;
    
    publ.titre = this.title;
    publ.contenu= this.text;
    this.service.AddPublication(publ,this.users[Math.floor(Math.random()*this.user.length)]).subscribe(()=>
    this.router.navigate(['Showpublication'])
    
    );

  }
  addlike(id_pb: number,user_id: number){
    this.service.likePublication(id_pb,user_id);
  }
  adddislike(id_pb: number,user_id: number){
    this.service.dislikePublication(id_pb,user_id);
  }
}
