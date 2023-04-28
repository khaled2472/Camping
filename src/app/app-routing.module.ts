import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { PublicationComponent } from './publication/publication/publication.component';
import { AddPublicationComponent } from './add-publication/add-publication/add-publication.component';
 
const routes: Routes =  [
  {
    path:'admin',
    component:AddPublicationComponent,
    children:[
      {
        path:'admin',
        component:AddPublicationComponent,
       
      }
    ]

  },
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'user',
        component: BodyUserComponent
      }
    ]
  },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
