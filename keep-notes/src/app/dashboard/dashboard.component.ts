import { Component, OnInit } from '@angular/core';
import { NOTES } from '../models/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes = NOTES;
  searchText:string =""

  search(){
    if(this.searchText === '' || !this.searchText)
     this.notes = NOTES;
     else{
      this.notes = NOTES;
      this.notes = this.notes.filter(notes => notes.title?.startsWith(this.searchText.toLowerCase()));
    } 
  }

  outArr = this.notes.filter(notes => notes.title?.startsWith(this.searchText.toLowerCase()))
  NOTES = this.outArr;

  constructor() { }

  ngOnInit(): void {
  }

}
