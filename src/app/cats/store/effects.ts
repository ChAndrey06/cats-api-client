import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import * as CatsActions from './actions';

@Injectable()
export class CatsEffects {
  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatsActions.getCats),
      mergeMap(() => {
        return this.apiService.getCats().pipe(
          map((cats) => CatsActions.getCatsSuccess({ cats })),
          catchError((error) =>
            of(CatsActions.getCatsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) { }
}