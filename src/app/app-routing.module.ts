import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDisplaySearchComponent }from './git-display-search/git-display-search.component';
import { ReturnReposComponent } from "./return-repos/ReturnReposComponent";

const routes: Routes = [
  {path:'home', component:GitSearchComponent},
  {path:'display_results', component:GitDisplaySearchComponent},
  {path:'returnrepos', component:ReturnReposComponent},
  {'pathMatch':'full','redirectTo':'home','path':''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
