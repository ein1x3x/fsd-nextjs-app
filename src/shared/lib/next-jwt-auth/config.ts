import { apiRoutes } from './api-routes.config';

import {
  applyRequestInterceptorCheck,
  skipResponseInterceptorCheck
} from './guards';

import type { InterceptorConfig } from './types';

function getConfig(
  externalConfig: Partial<InterceptorConfig>
): Required<InterceptorConfig> {
  return {
    applyRequestInterceptor:
      externalConfig.applyRequestInterceptor || applyRequestInterceptorCheck,

    skipResponseInterceptor:
      externalConfig.skipResponseInterceptor || skipResponseInterceptorCheck,

    apiRoutes: {
      login: externalConfig.apiRoutes?.login || apiRoutes.loginPath,
      refresh: externalConfig.apiRoutes?.refresh || apiRoutes.refreshPath,
      logout: externalConfig.apiRoutes?.logout || apiRoutes.logoutPath
    }
  };
}

export { getConfig };
