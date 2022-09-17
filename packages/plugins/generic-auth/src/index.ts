import { useGenericAuth, ResolveUserFn, GenericAuthPluginOptions } from '@envelop/generic-auth';
import { MeshPlugin, MeshPluginOptions, YamlConfig } from '@graphql-mesh/types';
import { getAdditionalResolver, loadFromModuleExportExpression } from '@graphql-mesh/utils';
import { extendSchema, GraphQLFieldResolver, parse } from 'graphql';

export default async function useMeshGenericAuth(
  options: MeshPluginOptions<YamlConfig.GenericAuthConfig>
): Promise<MeshPlugin<any>> {
  const userResolver =
    typeof options.resolveUser === 'string'
      ? await loadFromModuleExportExpression<GraphQLFieldResolver<any, any>>(options.resolveUser, {
          cwd: options.baseDir,
          defaultExportName: 'default',
          importFn: options.importFn,
        })
      : getAdditionalResolver(options.resolveUser);
  const resolveUserFn: ResolveUserFn<any, any> = context => userResolver({}, {}, context, undefined);
  let mode: GenericAuthPluginOptions<any, any>['mode'];
  switch (options.mode) {
    case 'resolveOnly':
      mode = 'resolve-only';
      break;
    case 'protectAll':
      mode = 'protect-all';
      break;
    case 'protectGranular':
      mode = 'protect-granular';
      break;
  }
  return {
    onPluginInit({ addPlugin }) {
      addPlugin(
        useGenericAuth({
          resolveUserFn,
          mode,
        })
      );
    },
    onSchemaChange({ schema }) {
      switch (mode) {
        case 'protect-all':
          extendSchema(
            schema,
            parse(/* GraphQL */ `
            directive @${options.directiveOrExtensionFieldName || 'skipAuth'} on FIELD_DEFINITION
          `)
          );
          break;
        case 'protect-granular':
          extendSchema(
            schema,
            parse(/* GraphQL */ `
            directive @${options.directiveOrExtensionFieldName || 'auth'} on FIELD_DEFINITION
          `)
          );
      }
    },
  };
}
