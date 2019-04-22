import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../_services/finance.service';
import { IOperation } from '../_models/operation.model';
import { IOperationCategory } from '../_models/operation-category.model';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {

  
  operations: IOperation[] = [];
  operationCategories: IOperationCategory[] = [];

  constructor(private financeService: FinanceService) { }

  ngOnInit() {
    this._getCategories();
    this._getOperations();
  }

  addOperation(newOperation: IOperation) {
    this.financeService.addOperation(newOperation)
      .subscribe(res => {
        // this.operations.push(res);
        this.operations = [...this.operations, res];
      })
  }

  private _getOperations() {
    this.financeService.getOperations()
      .subscribe(res => {
        this.operations = res;
      })
  }

  private _getCategories() {
    this.financeService.getCategories()
      .subscribe(res => {
        this.operationCategories = res;
      })
  }

}
