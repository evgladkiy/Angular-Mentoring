import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses.service';

import { Course } from '../course.model';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.less'],
})
export class CoursesPageComponent implements OnInit {
    public courses: Course[];
    public pagePath: string[] = ['Courses', 'Next-Page'];

    constructor(private coursesService: CoursesService) { }

    ngOnInit(): void {
        this.courses = this.coursesService.getCourses();
    }

    onDeleteCourse(id: string): void {
        this.coursesService.deleteCourse(id);
    }
}
