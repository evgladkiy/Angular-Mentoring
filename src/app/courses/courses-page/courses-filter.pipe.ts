import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../course.model';

@Pipe({
  name: 'coursesFilter'
})
export class CoursesFilterPipe implements PipeTransform {

  transform(courses: Course[], filter?: string): Course[] {
    if (filter) {
      return courses.filter(course => {
        const courseTitle = course.title.toLocaleLowerCase();

        return courseTitle.indexOf(filter) >= 0;
      });
    }

    return courses;
  }
}
