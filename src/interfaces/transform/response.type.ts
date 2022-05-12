import { ResponseHeaders } from '../../types/response-headers.type';

export interface ResponseTransform {
  (data: any, headers?: ResponseHeaders, status?: number): any;
}
