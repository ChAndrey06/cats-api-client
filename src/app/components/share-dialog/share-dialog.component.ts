import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss']
})
export class ShareDialogComponent implements OnInit {
  baseUrl = '';

  constructor() {  }

  ngOnInit(): void {
    this.baseUrl = window.location.origin;
  } 
}
