import { Component, Input, OnInit } from '@angular/core';

import Trainer from '../../shared/models/trainer.model';

@Component({
  selector: 'app-course-list-item-footer',
  templateUrl: './course-list-item-footer.component.html',
  styleUrls: ['./course-list-item-footer.component.less']
})
export class CourseListItemFooterComponent implements OnInit {
  @Input() trainers: Trainer[];
  @Input() startDate: Date;
  @Input() duration: number;
  @Input() rating: number;

  constructor() { }

  ngOnInit(): void {
    this.rating = this.rating / 10;
  }
}
