import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/Model/publication';
import { PublicationService } from 'src/app/Services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  message!: string;
  selectedFile!: File;
  paramurl:any;
  pub!:Publication;
titre:string = '';
text:string = '';
  constructor(private httpClient:HttpClient,
    private activatedroute: ActivatedRoute,
    private service : PublicationService
    ,
    private route:Router) { }

  ngOnInit(): void {
  }
  addpub(){
    let publ = new Publication;
    this.paramurl = this.activatedroute.snapshot.params['id_pb'];
    publ.titre = this.titre;
    publ.contenu = this.text;
    this.service.AddPublication(publ,this.paramurl).subscribe(()=>
      this.route.navigate(['Showpublication'])
    );

  }
}
