import { withGuildDocs } from 'guild-docs/next.config';
import { applyUnderscoreRedirects } from 'guild-docs/underscore-redirects';

export default withGuildDocs({
  basePath: process.env.NEXT_BASE_PATH && process.env.NEXT_BASE_PATH !== '' ? process.env.NEXT_BASE_PATH : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, meta) {
    applyUnderscoreRedirects(config, meta);

    return config;
  },
  redirects: () =>
    Object.entries({
      '/docs/introduction': '/docs',
      '/docs/getting-started': '/docs/getting-started/overview',
      '/docs/getting-started/introduction': '/docs/getting-started/overview',
      '/docs/getting-started/basic-example': '/docs',
      '/docs/handlers': '/docs/handlers/handlers-introduction',
      '/docs/handlers/available-handlers': '/docs/handlers/handlers-introduction',
      '/docs/api/modules/runtime_src': '/docs/getting-started/your-first-mesh-gateway',
      '/docs/recipes': '/docs',
      '/docs/api': '/docs',
      '/docs/modules': '/docs',
      '/docs/api/modules': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FilterHelperArgsOpts': '/docs',
      '/docs/api/classes/apollo_link_src.MeshApolloLink': '/docs',
      '/docs/api/classes': '/docs',
      '/docs/api/modules/json_machete_src': '/docs/handlers/json-schema',
      '/docs/recipes/as-gateway': '/docs/getting-started/your-first-mesh-gateway',
      '/docs/guides/combine-many-sources': '/docs/getting-started/combine-multiple-sources',
      '/docs/api/modules/urql_src': '/docs',
      '/docs/guides': '/docs',
      '/docs/recipes/multiple-apis': '/docs/getting-started/combine-multiple-sources',
      '/docs/recipes/as-sdk': '/docs/guides/mesh-sdk',
      '/docs/migration/openapi-0': '/docs/migration/openapi-0.31-0.32',
      '/docs/recipes/build-mesh-artifacts': '/docs/guides/mesh-sdk',
      '/docs/api/interfaces/types_src.YamlConfig.RateLimitPluginConfig': '/docs/getting-started/customize-mesh-server',
      '/docs/api/classes/utils_src.DefaultLogger': '/docs/getting-started/customize-mesh-server',
      '/docs/api/classes/handlers_mysql_src.MySQLHandler': '/docs/handlers/mysql',
      '/docs/api/interfaces/types_src.YamlConfig.CorsConfig': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/plugins_prometheus_src': '/docs/getting-started/customize-mesh-server',
      '/docs/api/interfaces/types_src.YamlConfig.ServeConfig': '/docs/getting-started/customize-mesh-server',
      '/docs/api/interfaces/types_src.YamlConfig.SortHelperArgsOpts': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/handlers_grpc_src': '/docs/handlers/grpc',
      '/docs/api/modules/loaders_openapi_src': '/docs/handlers/openapi',
      '/docs/api/modules/jit_executor_src': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/handlers_raml_src': '/docs/handlers/openapi',
      '/docs/api/modules/loaders_raml_src': '/docs/handlers/openapi',
      '/docs/api/interfaces/types_src.YamlConfig.OpenapiHandler': '/docs/handlers/openapi',
      '/docs/api/interfaces/types_src.YamlConfig.QueryStringOptions1': '/docs',
      '/docs/api/modules/handlers_mongoose_src': '/docs/handlers/mongoose',
      '/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts': '/docs/handlers/mongoose',
      '/docs/api/interfaces/runtime_src.MeshInstance': '/docs/guides/mesh-sdk',
      '/docs/api/modules/utils_src': '/docs/getting-started/customize-mesh-server',
      '/docs/api/interfaces/types_src.YamlConfig.Plugin': '/docs/getting-started/customize-mesh-server',
      '/docs/api/interfaces/types_src.YamlConfig.Transform': '/docs/getting-started/customize-mesh-server',
      '/docs/api/interfaces/types_src.MeshTransform': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/transforms_rename_src': '/docs/transforms/rename',
      '/docs/api/modules/config': '/docs',
      '/docs/api/modules/config_src': '/docs',
      '/docs/api/modules/transforms_prefix_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.PrefixTransformConfig': '/docs',
      '/docs/api/interfaces': '/docs',
      '/docs/api/classes/cache_file_src.FileCache': '/docs',
      '/docs/recipes/federation': '/docs',
      '/docs/api/modules/plugins_rate_limit_src': '/docs',
      '/docs/api/modules/transforms_hoist_field_src': '/docs',
      '/docs/guides/performances-best-practices': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseResolverOpts': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SoapHandler': '/docs',
      '/docs/api/modules/transforms_prune_src': '/docs',
      '/docs/api/modules/merger-bare': '/docs',
      '/docs/api/interfaces/json_machete_src.JSONSchemaObject': '/docs',
      '/docs/api/classes/transforms_encapsulate_src.EncapsulateTransform': '/docs',
      '/docs/api/classes/transforms_encapsulate_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.CacheEffectingOperationConfig': '/docs',
      '/docs/getting-started/combine-many-sources': '/docs',
      '/docs/recipes/typescript': '/docs',
      '/docs/api/modules/plugins_mock_src': '/docs',
      '/docs/transforms': '/docs',
      '/docs/api/modules/plugins_webhook_src': '/docs',
      '/docs/cache/inmemory-lru': '/docs',
      '/docs/cache': '/docs',
      '/docs/recipes/subscriptions-webhooks': '/docs/guides/subscriptions-webhooks',
      '/docs/getting-started/mesh-transforms': '/docs/transforms/transforms-introduction',
      '/docs/getting-started/multiple-apis': '/docs/getting-started/combine-multiple-sources',
      '/docs/api/interfaces/types_src.MeshPubSub': '/docs/guides/subscriptions-webhooks',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaLoaderBundleToGraphQLSchemaOptions':
        '/docs/handlers/json-schema',
      '/docs/subscriptions-webhooks': '/docs/guides/subscriptions-webhooks',
      '/docs/api/interfaces/loaders_json_schema_src.BundleJSONSchemasOptions': '/docs/handlers/json-schema',
      '/docs/api/modules/transforms_snapshot_src': '/docs/transforms/snapshot',
      '/docs/api/modules/string_interpolation_src': '/docs/transforms/transforms-introduction',
      '/docs/api/interfaces/types_src.YamlConfig.HTTPSConfig': '/docs/getting-started/customize-mesh-server',
      '/docs/recipes/live-queries': '/docs/guides/live-queries',
      '/docs/handlers/new-openapi': '/docs/handlers/openapi',
      '/docs/api/modules/handlers_mysql_src': '/docs/handlers/mysql',
      '/docs/api/interfaces/loaders_json_schema_src.TypeComposers': '/docs/handlers/json-schema',
      '/docs/api/interfaces/types_src.YamlConfig.GraphQLHandlerMultipleHTTPConfiguration': '/docs/handlers/graphql',
      '/docs/api/interfaces/store_src.FsStoreStorageAdapterOptions': '/docs/guides/file-uploads',
      '/docs/api/interfaces/types_src.YamlConfig.LiveQueryPolling': '/docs/guides/live-queries',
      '/docs/api/classes/store_src.MeshStore': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransformObject': '/docs/handlers/json-schema',
      '/docs/api/modules/handlers_postgraphile_src': '/docs/handlers/postgraphile',
      '/docs/api/modules/handlers_openapi_src': '/docs/handlers/openapi',
      '/docs/api/cli': '/docs/cli-commands',
      '/docs/api/interfaces/types_src.YamlConfig.ComputedAnnotation': '/docs',
      '/graphql/mesh/docs/getting-started/installation': '/docs/getting-started/installation',
      '/docs/api/modules/mergers_bare_src': '/docs/getting-started/combine-multiple-sources',
      '/graphql/mesh/docs/transforms/replace-field': '/docs/transforms/replace-field',
      '/graphql/mesh/docs/migration/new-openapi-to-openapi': '/docs/handlers/openapi',
      '/graphql/mesh/docs/handlers/neo4j': '/docs/handlers/neo4j',
      '/graphql/mesh/docs/handlers/handlers-introduction': '/docs/handlers/handlers-introduction',
      '/graphql/mesh/docs/guides/graphql-code-generator': '/docs/guides/graphql-code-generator',
      '/graphql/mesh/docs/guides/extending-unified-schema': '/docs/guides/extending-unified-schema',
      '/graphql/mesh/docs/transforms/type-merging': '/docs/transforms/type-merging',
      '/graphql/mesh/docs/guides/batching': '/docs/guides/batching',
      '/docs/handlers/openapi/endpoint.GQLschema': '/docs/handlers/graphql',
      '/docs/api/*': '/docs',
      '/docs/api/modules/mergers_stitching_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MySQLHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GrpcCredentialsSsl': '/docs',
      '/docs/api/classes/store_src.ReadonlyStoreError': '/docs',
      '/docs/api/modules/types_src': '/docs',
      '/docs/api/classes/handlers_thrift_src.ThriftHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MockingConfig': '/docs',
      '/docs/api/interfaces/loaders_raml_src.RAMLLoaderOptions': '/docs',
      '/docs/api/modules/handlers_soap_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.PubSubConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseOpts': '/docs',
      '/docs/api/classes/transforms_hoist_field_src.MeshHoistField': '/docs',
      '/docs/api/interfaces/types_src.MeshHandlerLibrary': '/docs',
      '/docs/api/modules/apollo_link_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RecordHelperArgsOpts': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.Cache': '/docs',
      '/docs/api/classes/cache_localforage_src.LocalforageCache': '/docs',
      '/docs/api/modules/plugins_live_query_src': '/docs',
      '/docs/api/classes/transforms_type_merging_src.TypeMerging': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RenameTransform': '/docs',
      '/docs/api/classes/transforms_naming_convention_src.NamingConventionTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SoapSecurityBasicAuthConfig': '/docs',
      '/docs/api/interfaces/types_src.MeshTransformOptions': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.TableField': '/docs',
      '/docs/api/interfaces/types_src.MeshTransformLibrary': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MockingFieldConfig': '/docs',
      '/docs/api/modules/loaders_json_schema_src': '/docs',
      '/docs/api/interfaces/types_src.KeyValueCacheSetOptions': '/docs',
      '/docs/api/modules/cli_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.TuqlHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.AdditionalStitchingResolverObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ResolversCompositionTransform': '/docs',
      '/docs/api/classes/transforms_cache_src.CacheTransform': '/docs',
      '/docs/api/modules/cache_cfw_kv_src': '/docs',
      '/docs/api/modules/handlers_tuql_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.AdditionalSubscriptionObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FederationFieldConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GraphQLHandlerCodeFirstConfiguration': '/docs',
      '/docs/api/interfaces/urql_src.MeshExchangeOptions': '/docs',
      '/docs/api/modules/transforms_rate_limit_src': '/docs',
      '/docs/api/classes/transforms_extend_src.ExtendTransform': '/docs',
      '/docs/api/modules/transforms_replace_field_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.JsonSchemaPubSubOperation': '/docs',
      '/docs/api/modules/types_src.YamlConfig': '/docs',
      '/docs/api/modules/transforms_cache_src': '/docs',
      '/docs/api/modules/transforms_naming_convention_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MongooseModel': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MongooseHandler': '/docs',
      '/docs/api/classes/handlers_mongoose_src.MongooseHandler': '/docs',
      '/docs/api/enums/store_src.PredefinedProxyOptionsName': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RAMLHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.UpdateMockStoreConfig': '/docs',
      '/docs/api/classes/transforms_snapshot_src.SnapshotTransform': '/docs',
      '/docs/api/interfaces/cli_src.GraphQLMeshCLIParams': '/docs',
      '/docs/api/classes/mergers_federation_src.FederationMerger': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.Source': '/docs',
      '/docs/api/classes/string_interpolation_src.Interpolator': '/docs',
      '/docs/api/interfaces/types_src.KeyValueCache': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ODataHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.QueryStringOptions': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SoapSecurityCertificateConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ResponseCacheTTLConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ProtoFilePath': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.NewrelicConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FederationTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MergedTypeConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MergedTypeField': '/docs',
      '/docs/api/modules/transforms_extend_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FileCacheConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FilterSchemaTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ComposeWithMongooseFieldsOpts1': '/docs',
      '/docs/api/modules/transforms_type_merging_src': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaOperationResponseConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GrpcHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RedisConfig': '/docs',
      '/docs/api/modules/handlers_odata_src': '/docs',
      '/docs/api/interfaces/types_src.MeshMergerLibrary': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GenerateOperationsConfig': '/docs',
      '/docs/api/classes/handlers_raml_src.RAMLHandler': '/docs',
      '/docs/api/classes/transforms_rate_limit_src.RateLimitTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.PostGraphileHandler': '/docs',
      '/docs/api/classes/mergers_bare_src.BareMerger': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.LiveQueryConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.KeyAnnotation': '/docs',
      '/docs/api/classes/store_src.FsStoreStorageAdapter': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RenameConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RenameTransformObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.LoadOptions': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ExtendTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ResponseCacheConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig1': '/docs',
      '/docs/api/interfaces/types_src.MeshHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.CFWorkersKVCacheConfig': '/docs',
      '/docs/api/modules/handlers_json_schema_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RateLimitTransformConfig': '/docs',
      '/docs/api/modules/handlers_thrift_src': '/docs',
      '/docs/api/classes/cache_cfw_kv_src.CFWorkerKVCache': '/docs',
      '/docs/api/interfaces/types_src.MeshMergerContext': '/docs',
      '/docs/api/classes/utils_src.PubSub': '/docs',
      '/docs/api/modules/mergers_federation_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FederationTransformType': '/docs',
      '/docs/api/classes/handlers_postgraphile_src.PostGraphileHandler': '/docs',
      '/docs/api/modules/store_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.LimitHelperArgsOpts': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.PruneTransformConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlCo…HoistFieldTransformFieldPathConfigObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SDKConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.JsonSchemaHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ResolveReferenceObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.JsonSchemaHandlerBundle': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ComposeMongooseInputType': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.TypeMergingConfig': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaLinkConfig': '/docs',
      '/docs/api/modules/cache_file_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.PaginationResolverOpts': '/docs',
      '/docs/api/interfaces/types_src.MeshMerger': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MergedRootFieldConfig': '/docs',
      '/docs/api/interfaces/json_machete_src.JSONSchemaVisitorContext': '/docs',
      '/docs/api/classes/mergers_stitching_src.StitchingMerger': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SoapSelectQueryOrMutationFieldConfig': '/docs',
      '/docs/api/modules/transforms_federation_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GraphQLHandlerHTTPConfiguration': '/docs',
      '/docs/api/modules/handlers_graphql_src': '/docs',
      '/docs/api/modules/cache_redis_src': '/docs',
      '/docs/api/modules/handlers_neo4j_src': '/docs',
      '/docs/api/classes/handlers_openapi_src.OpenAPIHandler': '/docs',
      '/docs/api/modules/transforms_filter_schema_src': '/docs',
      '/docs/api/classes/transforms_resolver…sition_src.ResolversCompositionTransform': '/docs',
      '/docs/api/interfaces/types_src.OnFetchHookPayload': '/docs',
      '/docs/api/classes/transforms_replace_field_src.ReplaceFieldTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.LocalforageConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FederationObjectConfig': '/docs',
      '/docs/api/classes/handlers_grpc_src.GrpcHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RenameConfig1': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.EncapsulateTransformApplyTo': '/docs',
      '/docs/api/modules/transforms_resolvers_composition_src': '/docs',
      '/docs/api/interfaces/types_src.OnFetchHookDonePayload': '/docs',
      '/docs/api/interfaces/utils_src.ReadFileOrUrlOptions': '/docs',
      '/docs/api/classes/transforms_federation_src.FederationTransform': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts1': '/docs',
      '/docs/api/classes/handlers_soap_src.SoapHandler': '/docs',
      '/docs/api/classes/store_src.InMemoryStoreStorageAdapter': '/docs',
      '/docs/api/classes/handlers_graphql_src.GraphQLHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ThriftHandler': '/docs',
      '/docs/api/modules/cache_localforage_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.HoistFieldTransformConfig': '/docs',
      '/docs/api/classes/transforms_prune_src.PruneTransform': '/docs',
      '/docs/api/classes/handlers_neo4j_src.Neo4JHandler': '/docs',
      '/docs/api/modules/transforms_encapsulate_src': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaLoaderOptions': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.GetFromMockStoreConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlCo…g.AdditionalStitchingBatchResolverObject': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.RAMLSelectQueryOrMutationFieldConfig': '/docs',
      '/docs/api/classes/cache_redis_src.RedisCache': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformObject': '/docs',
      '/docs/api/classes/handlers_odata_src.ODataHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.NamingConventionTransformConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.TypeConverterResolversOpts': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.Neo4JHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.Handler': '/docs',
      '/docs/api/interfaces/loaders_openapi_src.OpenAPILoaderOptions': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaLoaderBundle': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src.JSONSchemaLoaderBundleOptions': '/docs',
      '/docs/api/classes/handlers_json_schema_src.JsonSchemaHandler': '/docs',
      '/docs/api/modules/plugins_newrelic_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.OASSelectQueryOrMutationFieldConfig': '/docs',
      '/docs/api/interfaces/apollo_link_src.MeshApolloRequestHandlerOptions': '/docs',
      '/docs/api/modules/plugins_response_cache_src': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.FederationField': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.LiveQueryInvalidation': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.SnapshotTransformConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.ReplaceFieldTransformConfig': '/docs',
      '/docs/api/interfaces/types_src.MeshMergerOptions': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.JsonSchemaHTTPOperation': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.MaskedErrorsPluginConfig': '/docs',
      '/docs/api/classes/store_src.ValidationError': '/docs',
      '/docs/api/interfaces/types_src.YamlCo…GraphQLHandlerhighestValueStrategyConfig': '/docs',
      '/docs/api/classes/handlers_tuql_src.TuqlHandler': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.CacheTransformConfig': '/docs',
      '/docs/api/interfaces/types_src.YamlConfig.CacheInvalidateConfig': '/docs',
    }).map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: true,
    })),
});
