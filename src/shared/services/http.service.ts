import axios, { AxiosPromise, Method } from "axios";
import { toCamel, toSnake } from "convert-keys";
import { EXTERNAL_LINKS } from "../constants";
import { ApiEndpoint, ApiVersion } from "../enums";

export interface HttpServiceArgs {
  apiUrl?: string;
  endpoint: ApiEndpoint | string;
  method: Method;
  data?: any;
  apiVersion?: ApiVersion;
}

export const httpService = async <T>({
  apiUrl,
  endpoint,
  method,
  data,
  apiVersion = ApiVersion.V1,
}: HttpServiceArgs): Promise<AxiosPromise<T>> => {
  const url =
    apiUrl || `${EXTERNAL_LINKS.HACKER_NEWS}/${apiVersion}/${endpoint}`;

  const request = await axios({
    method,
    data: data && toSnake(data),
    url,
  });

  return toCamel(request);
};
