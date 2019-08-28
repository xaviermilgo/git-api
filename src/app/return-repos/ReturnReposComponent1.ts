import { Component, OnInit } from '@angular/core';
import { GitSearchHttpService } from '../git-search-http.service';
@Component({
  selector: 'app-display-repos',
  templateUrl: './return-repos.component.html',
  styleUrls: ['./return-repos.component.css']
})
export class ReturnReposComponent implements OnInit {
  repo: any;
  searchWord: string;
  constructor(private searchService: GitSearchHttpService) { }
  ngOnInit() {
  }
  parentGetResult(searchWord) {
    this.searchService.getOtherRepos(searchWord).then(() => {
      this.repo = this.searchService.repo;
    }, (error) => {
      console.log(error);
    });
  }
}
