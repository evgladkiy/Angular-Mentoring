import { ErrorPageModule } from './error-page.module';

describe('ErrorPageModule', () => {
  let errorPageModule: ErrorPageModule;

  beforeEach(() => {
    errorPageModule = new ErrorPageModule();
  });

  it('should create an instance', () => {
    expect(errorPageModule).toBeTruthy();
  });
});
