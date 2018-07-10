import { CoursesFilterPipe } from './courses-filter.pipe';
import { courses } from './courses';


describe('CoursesFilterPipe', () => {
  const itemsToFilter = [ ...courses ];

  let coursesFilter: CoursesFilterPipe;

  beforeEach(() => {
    coursesFilter = new CoursesFilterPipe();
  });

  it('create an instance of CoursesFilterPipe', () => {
    expect(coursesFilter).toBeTruthy();
  });

  it('should correct filter course', () => {
    const filtredItems = coursesFilter.transform(itemsToFilter, 'excepteur');

    expect(filtredItems.length).toBe(2);
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
