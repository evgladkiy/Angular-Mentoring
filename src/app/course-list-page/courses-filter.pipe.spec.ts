import { CoursesFilterPipe } from './courses-filter.pipe';
import { courses } from './../shared/services/courses/courses.mock';
import { Course } from '../shared/models';

describe('CoursesFilterPipe', () => {
  let itemsToFilter: Course[];
  let coursesFilter: CoursesFilterPipe;

  beforeEach(() => {
    itemsToFilter = [ ...courses ];
    coursesFilter = new CoursesFilterPipe();
  });

  it('create an instance of CoursesFilterPipe', () => {
    expect(coursesFilter).toBeTruthy();
  });

  it('should correct filter course', () => {
    const filtredItems = coursesFilter.transform(itemsToFilter, 'reprehenderit consectetur dolore');

    expect(filtredItems.length).toBe(1);
  });

  it('should correct filter course if filter query are empty', () => {
    const filtredItems = coursesFilter.transform(itemsToFilter, '');

    expect(filtredItems.length).toBe(courses.length);
  });

  it('should correct filter course if courses title do not contain filter query', () => {
    const filtredItems = coursesFilter.transform(itemsToFilter, 'non contained words');

    expect(filtredItems.length).toBe(0);
  });
});
