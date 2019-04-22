import { Pipe, PipeTransform } from '@angular/core';
import { IOperationCategory } from '../_models/operation-category.model';
import { EType } from '../_models/type.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(categories: IOperationCategory[], type: EType): IOperationCategory[] {
    return categories.filter(c => c.type === type);
  }

}
