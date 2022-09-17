import { GraphQLLiveDirectiveAST, useLiveQuery } from '@envelop/live-query';
import { MeshPluginOptions, YamlConfig } from '@graphql-mesh/types';
import { InMemoryLiveQueryStore } from '@n1ru4l/in-memory-live-query-store';
import { Plugin } from '@envelop/core';
import { useInvalidateByResult } from './useInvalidateByResult';
import { extendSchema, Kind } from 'graphql';

export default function useMeshLiveQuery(options: MeshPluginOptions<YamlConfig.LiveQueryConfig>): Plugin {
  return {
    onPluginInit({ addPlugin }) {
      options.logger.debug(`Creating Live Query Store`);
      const liveQueryStore = new InMemoryLiveQueryStore({
        includeIdentifierExtension: true,
      });
      options.polling?.forEach(pollingConfig => {
        const interval = setInterval(() => {
          liveQueryStore
            .invalidate(pollingConfig.invalidate)
            .catch((e: Error) =>
              options.logger.warn(`Invalidation failed for ${pollingConfig.invalidate}: ${e.message}`)
            );
        }, pollingConfig.interval);
        const id = options.pubsub.subscribe('destroy', () => {
          clearInterval(interval);
          options.pubsub.unsubscribe(id);
        });
      });
      addPlugin(useLiveQuery({ liveQueryStore }));
      if (options.invalidations?.length) {
        addPlugin(
          useInvalidateByResult({ liveQueryStore, invalidations: options.invalidations, logger: options.logger })
        );
      }
    },
    onSchemaChange({ schema }) {
      extendSchema(schema, {
        kind: Kind.DOCUMENT,
        definitions: [GraphQLLiveDirectiveAST],
      });
    },
  };
}
