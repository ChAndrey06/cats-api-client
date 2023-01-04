import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/types/app-state.interface';
import * as CatsActions from '../../store/actions';
import { catsSelector, errorSelector, isLoadingSelector } from '../../store/selectors';
import { CatInterface } from '../../types';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  cats$: Observable<CatInterface[]>;
  
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.cats$ = this.store.pipe(select(catsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(CatsActions.getCats());
  }
}
