import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  private spinnerVisibilitySub: Subscription;
  public shouldShowSpinner: boolean;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerVisibilitySub = this.spinnerService.shouldShowSpinnerChannel$.subscribe(
      isShown => this.shouldShowSpinner = isShown
    );
  }

  ngOnDestroy(): void {
    this.spinnerVisibilitySub.unsubscribe();
  }
}
