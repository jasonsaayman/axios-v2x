import { HttpVerbs } from '../enums/verbs.enum';

type RequestTransformerType = {
  (data: any, headers: AxiosRequestHeaders): any;
};

type AxiosRequestHeaders = Record<string, string | number | boolean>;

export interface Config {
  url?: string,
  method?: HttpVerbs,
  baseURL?: string,
  transformRequest?: RequestTransformerType | RequestTransformerType[],
}
