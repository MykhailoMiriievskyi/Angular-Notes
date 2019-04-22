import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkplaceComponent } from './workplace/workplace.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { StatsComponent } from './stats/stats.component';
import { FinanceService } from './_services/finance.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoryPipe } from './_pipes/category.pipe';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [WorkplaceComponent, AddOperationComponent, StatsComponent, CategoryPipe],
  exports: [WorkplaceComponent],
  providers: [FinanceService]
})
export class FinanceModule { }
