import { HttpVerbs } from '../enums/verbs.enum';
import { RequestTransformerType } from '../types/transform/request.type';

export interface Config {
  url?: string,
  method?: HttpVerbs,
  baseURL?: string,
  transformRequest?: RequestTransformerType | RequestTransformerType[],
}
