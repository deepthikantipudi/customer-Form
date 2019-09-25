import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';


const routes: Routes = [
  {path: 'topbar', component: TopBarComponent},
  {path: '', component: CustomerFormComponent},
  {path:'customerlist', component: CustomerlistComponent }
  // { path: '/:id', component: CustomerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
