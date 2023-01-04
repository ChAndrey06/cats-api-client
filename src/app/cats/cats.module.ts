import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { CatsComponent } from './components/cats/cats.component';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './store/effects';
import { GridComponent } from './components/grid/grid.component';
import { FiltersComponent } from './components/filters/filters.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    CatsComponent,
    GridComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('cats', reducer),
    EffectsModule.forFeature([CatsEffects]),

    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule
  ],
  exports: [
    CatsComponent
  ]
})
export class CatsModule { }
