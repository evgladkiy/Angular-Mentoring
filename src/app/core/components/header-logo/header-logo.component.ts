import { Component } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.less'],
})
export class HeaderLogoComponent {
  public logoText = 'AwesomeLogo';

  constructor() { }
}
