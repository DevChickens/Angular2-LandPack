import { Component, OnInit } from '@angular/core';

import { LandpackSearchDestinationSearchComponent } from './landpack.search.destination.search.component';

@Component({
  moduleId: module.id,
  selector: 'landpack-search-destination',
  template: `<div>landpack-search-destination component</div>
  <landpack-search-destination-search></landpack-search-destination-search>`,
  directives: [
    LandpackSearchDestinationSearchComponent
  ]
})
export class LandpackSearchDestinationComponent {
  constructor() {}
}
