import { Component, OnInit } from '@angular/core';
import { Users} from '../users';
import {UserRepo} from '../user-repo';
import {GitSearchHttpService} from '../git-search-http.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers :[GitSearchHttpService],
})
export class GitSearchComponent implements OnInit {
   public searchWord : string = 'Manuel-bit';
  user : Users;
  repo : UserRepo;

  constructor( public getMyUser:GitSearchHttpService,private getMyRepo:GitSearchHttpService) { }

  ngOnInit() {
    this.parentGetResult();
  }
  parentGetResult(){
    this.getMyUser.getUserResult(this.searchWord).then(
      ()=>{
        this.user = this.getMyUser.user;
      },
      (error)=>{
         console.log(error);
      })
 
    this. getMyRepo.getRepos(this.searchWord).then(
      ()=>{
        this.repo = this. getMyRepo.repo;
      },
      (error)=>{
        console.log(error);
      }
    )

}
}