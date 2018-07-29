import { EditCourseModule } from './edit-course.module';

describe('EditCourseModule', () => {
  let editCourseModule: EditCourseModule;

  beforeEach(() => {
    editCourseModule = new EditCourseModule();
  });

  it('should create an instance', () => {
    expect(editCourseModule).toBeTruthy();
  });
});
