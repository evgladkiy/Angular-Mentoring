import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;

  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create an instance of DurationPipe', () => {
    expect(durationPipe).toBeTruthy();
  });

  it('should correct transform duration', () => {
    expect(durationPipe.transform(0)).toBe('0min');
    expect(durationPipe.transform(45)).toBe('45min');
    expect(durationPipe.transform(60)).toBe('1h');
    expect(durationPipe.transform(61)).toBe('1h 1min');
    expect(durationPipe.transform(122)).toBe('2h 2min');
    expect(durationPipe.transform(155)).toBe('2h 35min');
  });
});
