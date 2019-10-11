import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})

export class TabContentComponent implements OnInit {
  navLinks = [
    {path: 'student', label: 'Student'},
    {path: 'company', label: 'Company'},
    { path: 'university', label:'University' },
    { path: 'unemployed', label:'Unemployed' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
