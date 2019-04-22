import { Component } from '@angular/core';
import { IOperation } from '../_models/operation.model';
import { EType } from '../_models/type.model';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent {

  // x: string = 'Some string';
  // x: number = 50;
  // x: boolean = true;
  // x: number[] = [40, 345, 4];

  x: boolean = false;

  operations: IOperation[] = [
    {
      id: 'oper1',
      sum: 40,
      description: 'ШТАНИ',
      catId: 'cat1',
      type: EType.consumption
    },
    {
      id: 'oper2',
      sum: 50,
      description: 'ЗАРПЛАТА',
      catId: 'cat2',
      type: EType.income
    }
  ]

  constructor() { }

}
