// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { APIGatewayClientConfig } from "./APIGatewayClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: APIGatewayClientConfig) => ({
  apiVersion: "2015-07-09",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "API Gateway",
  urlParser: config?.urlParser ?? parseUrl,
});
