import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {TableComponent} from "./components/table/table.component"; // CLI imports router

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
