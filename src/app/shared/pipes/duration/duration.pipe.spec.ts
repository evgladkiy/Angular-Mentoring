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
    expect(durationPipe.transform(45)).toBe('45 min');
    expect(durationPipe.transform(60)).toBe('1 h');
    expect(durationPipe.transform(61)).toBe('1 h 1 min');
    expect(durationPipe.transform(122)).toBe('2 h 2 min');
    expect(durationPipe.transform(155)).toBe('2 h 35 min');
  });
});
