import { Injectable } from '@angular/core';
import { IOperation } from '../_models/operation.model';
import { EType } from '../_models/type.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOperationCategory } from '../_models/operation-category.model';

@Injectable()
export class FinanceService {

  

  constructor(private _http: HttpClient) { }

  getOperations(): Observable<IOperation[]> {
    return this._http.get<IOperation[]>('http://localhost:3000/operations');
  }

  getCategories(): Observable<IOperationCategory[]> {
    return this._http.get<IOperationCategory[]>('http://localhost:3000/categories');
  }

  addOperation(operation: IOperation): Observable<IOperation> {
    return this._http.post<IOperation>('http://localhost:3000/operations', operation);
  }

}
