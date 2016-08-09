import { provideRouter, RouterConfig } from '@angular/router';

import { LandpackRoutes } from './landpack/landpack.index';

const routes: RouterConfig = [
  ...LandpackRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
