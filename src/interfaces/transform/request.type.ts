import { RequestHeaders } from '../../types/request-headers.type';

export interface RequestTransform {
  (data: any, headers: RequestHeaders): any;
}
