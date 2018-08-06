import { EditCoursePageModule } from './edit-course-page.module';

describe('EditCourseModule', () => {
  let editCoursePageModule: EditCoursePageModule;

  beforeEach(() => {
    editCoursePageModule = new EditCoursePageModule();
  });

  it('should create an instance', () => {
    expect(editCoursePageModule).toBeTruthy();
  });
});
