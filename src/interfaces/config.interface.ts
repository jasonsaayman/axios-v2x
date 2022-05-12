import { HttpVerbs } from '../enums/verbs.enum';
import { RequestTransform } from './transform/request.type';
import { ResponseTransform } from './transform/response.type';
import { RequestHeaders } from '../types/request-headers.type';

export interface Config {
  url?: string,
  method?: HttpVerbs,
  baseURL?: string,
  transformRequest?: RequestTransform | RequestTransform[],
  transformResponse?: ResponseTransform | ResponseTransform[],
  headers?: RequestHeaders,
  params?: any,
}
