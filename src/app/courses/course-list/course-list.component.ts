import { Component, OnInit } from '@angular/core';

import { Course } from './course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent {

  public courses: Course[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit.',
      creationDate: new Date(2014, 5, 14),
      duration: 90,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nobis, minima unde commodi eos?',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur.',
      creationDate: new Date(2002, 2, 20),
      duration: 830,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium totam blanditiis tenetur ad, exercitationem rerum in cupiditate maxime libero ducimus!',
    },
  ];

  constructor() { }

}
