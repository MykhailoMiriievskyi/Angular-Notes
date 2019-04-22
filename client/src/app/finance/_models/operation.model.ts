import { EType } from "./type.model";


export interface IOperation {
  id?: string;
  sum: number;
  description: string;
  catId?: string;
  type: EType;
}
