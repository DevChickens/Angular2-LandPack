import { RouterConfig } from '@angular/router';

import { LandpackMainPageComponent, LandpackSearchPageComponent } from './landpack.index';

export const LandpackRoutes: RouterConfig = [
  {
    path: '',
    component: LandpackMainPageComponent
  },
  {
    path: 'search',
    component: LandpackSearchPageComponent,
  }
];
