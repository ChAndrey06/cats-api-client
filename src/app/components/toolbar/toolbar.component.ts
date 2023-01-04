import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShareDialogComponent } from '../share-dialog/share-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public shareDialog: MatDialog) { }

  openShareDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.shareDialog.open(ShareDialogComponent, {
      width: '30%'
    });
  }

  ngOnInit(): void {
  }
}