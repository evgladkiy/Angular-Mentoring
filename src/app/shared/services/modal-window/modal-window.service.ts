import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private channel = new Subject<string>();
  public channel$ = this.channel.asObservable();

  constructor() { }

  showModalByCourseId(id: string): void {
    this.channel.next(id);
  }

  closeModal(): void {
    this.channel.next(null);
  }
}
