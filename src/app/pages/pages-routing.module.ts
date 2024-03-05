import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal/modal/modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from 'src/@myproject/service/auth.guard';


const routes: Routes = [{
  path:'open-modal',
  component:ModalComponent
},
{ 
  
  path:'dashboard',
  component:DashboardComponent,
  canActivate: [AuthGuard],
  // redirectTo: 'auth/dashboard', pathMatch: 'full' , 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }