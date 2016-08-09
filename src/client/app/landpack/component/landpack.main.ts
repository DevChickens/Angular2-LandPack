import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { LandpackSearchPageComponent } from './search/landpack.search.page';

@Component({
  moduleId: module.id,
  selector: 'landpack-main',
  template: `<landpack-search></landpack-search>`,
  directives: [REACTIVE_FORM_DIRECTIVES, LandpackSearchPageComponent]
})
export class LandpackMainPageComponent implements OnInit {
  constructor() {}
  ngOnInit() {
  }
}
