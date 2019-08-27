import { Component, OnInit } from '@angular/core';
import {Users} from '../users';
import {GitSearchHttpService} from '../git-search-http.service';
import {UserRepo} from '../user-repo';

@Component({
  selector: 'app-git-display-search',
  templateUrl: './git-display-search.component.html',
  styleUrls: ['./git-display-search.component.css']
})
export class GitDisplaySearchComponent implements OnInit {
  user : Users;
  repo : any;
  searchWord : string;
  
  constructor(public searchService:GitSearchHttpService, private searchService2:GitSearchHttpService) { }
  
  ngOnInit() {
  }
  parentGetResult(searchWord){
   this.searchService.getUserResult(searchWord).then(
     ()=>{
       this.user = this.searchService.user;
     },
     (error)=>{
        console.log(error);
     })

   this.searchService2.getRepos(searchWord).then(
     ()=>{
       this.repo = this.searchService2.repo;
     },
     (error)=>{
       console.log(error);
     }
   )
  }


}
