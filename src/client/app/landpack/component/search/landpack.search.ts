import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LandpackSearchCalendarComponent } from './landpack.search.calendar.component';
import { LandpackSearchDestinationComponent } from './landpack.search.destination.component';
import { LandpackSearchPackageComponent } from './landpack.search.package.component';


@Component({
  moduleId: module.id,
  selector: 'landpack-search',
  template: `
    <div>landpack-search</div>
    <!--
      <landpack-search-calendar></landpack-search-calendar>
      <landpack-search-destination></landpack-search-destination>
      <landpack-search-package></landpack-search-package>
    -->
  `,
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    LandpackSearchCalendarComponent,
    LandpackSearchDestinationComponent,
    LandpackSearchPackageComponent
  ]
})
export class LandpackSearchPageComponent {
  constructor() {}
}