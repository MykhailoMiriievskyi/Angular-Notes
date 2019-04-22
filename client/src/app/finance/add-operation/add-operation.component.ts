import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IOperationCategory } from '../_models/operation-category.model';
import { IOperation } from '../_models/operation.model';
import { EType } from '../_models/type.model';


enum DefaultCatId {
  income = '+',
  consumption = '-'
}

@Component({
  selector: 'app-add-operation',
  templateUrl: './add-operation.component.html',
  styleUrls: ['./add-operation.component.scss']
})
export class AddOperationComponent implements OnInit {

  _currentOperationType: EType = EType.consumption;

  operation: IOperation = {
    sum: 0,
    description: '',
    type: this.currentOperationType,
    catId: null
  }

  set currentOperationType(newType) {
    this._currentOperationType = newType;
    this.operation.type = newType
    this._setCatId();
  }

  get currentOperationType() {
    return this._currentOperationType;
  }

  @Input()
  categories: IOperationCategory[] = [];
  //Данное свойство может устанавливаться из вне,
  //тоесть из главного компонента

  

  constructor() { }

  ngOnInit() {
    this._setCatId();
  }


  private _setCatId() {
    this.operation.catId = this.operation.type === EType.consumption ?
      DefaultCatId.consumption : DefaultCatId.income
  }

  @Output()
  //Событие которое вызывается и передается
  // в родительский компонент
  toAddOperation = new EventEmitter();

  addOperation() {  
    this.toAddOperation.emit(this.operation);
  }

}
