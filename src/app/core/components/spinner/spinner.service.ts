import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private shouldShowSpinnerChannel = new BehaviorSubject<boolean>(false);
  public shouldShowSpinnerChannel$ = this.shouldShowSpinnerChannel.asObservable();

  constructor() { }

  showSpinner(): void {
    this.shouldShowSpinnerChannel.next(true);
  }

  hideSpinner(): void {
    this.shouldShowSpinnerChannel.next(false);
  }
}
