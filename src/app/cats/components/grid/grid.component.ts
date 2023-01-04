import { Component, Input, OnInit } from '@angular/core';
import { CatInterface } from '../../types';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() cats: CatInterface[] | null = null;
  
  constructor() { }

  ngOnInit(): void {
  }
}
