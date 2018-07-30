import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: [ './breadcrumbs.component.less' ],
})
export class BreadcrumbsComponent {
  @Input() path: string[];

  constructor() { }
}
