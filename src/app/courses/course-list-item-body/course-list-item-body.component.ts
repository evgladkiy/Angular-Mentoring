import { Component, Input } from '@angular/core';
import { ModalWindowService } from '../../shared/services';

@Component({
  selector: 'app-course-list-item-body',
  templateUrl: './course-list-item-body.component.html',
  styleUrls: ['./course-list-item-body.component.less'],
})
export class CourseListItemBodyComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() id: string;

  constructor(private modalWindowService: ModalWindowService) { }

  onClick(id: string): void {
    this.modalWindowService.showModalByCourseId(id);
  }
}
