import { Component, OnInit, Input } from '@angular/core';
import { IOperation } from '../_models/operation.model';
import { EType } from '../_models/type.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats: OperationsStat = {
    income: 0,
    consumption: 0,
    profit: 0
  };

  private _operations: IOperation[] = [];

  @Input()
  set operations(operations: IOperation[]) {
    this._operations = operations;
    const incomeOperations = operations.filter(o => o.type === EType.income);
    const consumptionOperations = operations.filter(o => o.type === EType.consumption);
    this.stats = new OperationsStat(incomeOperations, consumptionOperations);
  }

  get operations(): IOperation[] {
    return this._operations;
  }

  constructor() { }

  ngOnInit() {

  }

}


class OperationsStat {
  income: number = 0;
  consumption: number = 0;
  profit: number = 0;
  constructor(incomeOperations: IOperation[], consumptionOperations: IOperation[]) {
    incomeOperations.forEach(io => {
      this.income += io.sum;
    });
    consumptionOperations.forEach(co => {
      this.consumption += co.sum;
    });
    this.profit = this.income - this.consumption;
  }
}
