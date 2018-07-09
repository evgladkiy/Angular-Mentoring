import { CapitalizedPipe } from './capitalized.pipe';

describe('CapitalizedPipe', () => {
  let capitalizedPipe: CapitalizedPipe;

  beforeEach(() => {
    capitalizedPipe = new CapitalizedPipe();
  });

  it('create an instance of CapitalizedPipe', () => {
    expect(capitalizedPipe).toBeTruthy();
  });

  it('should correct capitalize srting', () => {
    expect(capitalizedPipe.transform('lorem, ipsum dolor.')).toBe('Lorem, ipsum dolor.');
    expect(capitalizedPipe.transform('LOREM, IPSUM DOLOR.')).toBe('Lorem, ipsum dolor.');
    expect(capitalizedPipe.transform('lOreM, IPsUM DoLoR.')).toBe('Lorem, ipsum dolor.');
  });
});
