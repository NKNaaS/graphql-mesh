import { isAsyncIterable, Path } from '@envelop/core';
import { MeshPlugin } from '@graphql-mesh/types';
import { getHeadersObj } from '@graphql-mesh/utils';

export interface MeshFetchHTTPInformation {
  sourceName: string;
  path: Path;
  request: {
    timestamp: number;
    url: string;
    method: string;
    headers: Record<string, string>;
  };
  response: {
    timestamp: number;
    status: number;
    statusText: string;
    headers: Record<string, string>;
  };
  responseTime: number;
}

export function useIncludeHttpDetailsInExtensions(): MeshPlugin<any> {
  const httpDetailsByContext = new WeakMap<any, MeshFetchHTTPInformation[]>();

  return {
    onFetch({ url, context, info, options }) {
      if (context != null) {
        const requestTimestamp = Date.now();
        return ({ response }) => {
          const responseTimestamp = Date.now();
          const responseTime = responseTimestamp - requestTimestamp;
          let httpDetailsList = httpDetailsByContext.get(context);
          if (!httpDetailsList) {
            httpDetailsList = [];
            httpDetailsByContext.set(context, httpDetailsList);
          }
          const httpDetails: MeshFetchHTTPInformation = {
            sourceName: (info as any)?.sourceName,
            path: info?.path,
            request: {
              timestamp: requestTimestamp,
              url,
              method: options.method || 'GET',
              headers: getHeadersObj(options.headers as Headers),
            },
            response: {
              timestamp: responseTimestamp,
              status: response.status,
              statusText: response.statusText,
              headers: getHeadersObj(response.headers),
            },
            responseTime,
          };
          httpDetailsList.push(httpDetails);
        };
      }
      return undefined;
    },
    onExecute({ args: { contextValue } }) {
      return {
        onExecuteDone({ result, setResult }) {
          if (!isAsyncIterable(result)) {
            const httpDetailsList = httpDetailsByContext.get(contextValue);
            if (httpDetailsList != null) {
              setResult({
                ...result,
                extensions: {
                  ...result.extensions,
                  httpDetails: httpDetailsList,
                },
              });
            }
          }
        },
      };
    },
  };
}
