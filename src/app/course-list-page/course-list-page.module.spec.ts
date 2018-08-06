import { CourseListPageModule } from './course-list-page.module';

describe('CourseListPageModule', () => {
  let courseListPageModule: CourseListPageModule;

  beforeEach(() => {
    courseListPageModule = new CourseListPageModule();
  });

  it('should create an instance', () => {
    expect(courseListPageModule).toBeTruthy();
  });
});
