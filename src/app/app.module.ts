import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { nvBarComponent } from './nvBar/nvBar.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDisplaySearchComponent } from './git-display-search/git-display-search.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import {HttpClientModule } from '@angular/common/http';
import {GitSearchHttpService} from './git-search-http.service';
import { ReturnReposComponent1 } from "./return-repos/ReturnReposComponent1";
import { ReturnReposComponent } from "./return-repos/ReturnReposComponent";
import { HighlightDirective } from './highlight.directive';
import { DatepipePipe } from './datepipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    nvBarComponent,
    GitSearchComponent,
    GitDisplaySearchComponent,
    GitSearchFormComponent,
    ReturnReposComponent,
    ReturnReposComponent1,
    HighlightDirective,
    DatepipePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitSearchHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
