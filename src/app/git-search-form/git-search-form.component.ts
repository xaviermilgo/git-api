import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {
  searchWord:string;
  @Output () emitResult= new EventEmitter<any>(); 
  
  getResult(){
      this.emitResult.emit(this.searchWord);
  }
  constructor() { }

  ngOnInit() {
  }

}
