import { AxiosRequestHeaders } from '../request/headers.type';

export type RequestTransformerType = {
  (data: any, headers: AxiosRequestHeaders): any;
};
