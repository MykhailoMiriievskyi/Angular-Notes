import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace/workplace.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WorkplaceComponent, AddOperationComponent, StatsComponent],
  exports: [WorkplaceComponent]
})
export class FinanceModule { }
