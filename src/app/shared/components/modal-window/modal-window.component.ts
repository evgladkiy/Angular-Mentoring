import {
  Component, OnInit, Input, Output,
  EventEmitter, ElementRef, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: [ './modal-window.component.less' ],
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  @Input() modalTitle: string;
  @Input() submitText: string;

  @Output() submitModal = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<any>();

  private bodyEl: HTMLBodyElement;
  private escCode = 27;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onclick(event: MouseEvent): void {
    if (event.target === this.el.nativeElement) {
      this.closeModal.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (event.keyCode === this.escCode) {
      this.closeModal.emit();
    }
  }

  ngOnInit(): void {
    this.bodyEl = this.el.nativeElement.closest('body');
    this.bodyEl.classList.add('with-modal');
  }

  ngOnDestroy(): void {
    this.bodyEl.classList.remove('with-modal');
  }

  onSubmit(): void {
    this.submitModal.emit();
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
