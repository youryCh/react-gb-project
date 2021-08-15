import { sum } from './example';

describe('example description', () => {
  it('sum return 5', () => {
    expect(sum(2, 3)).toEqual(5);
  });

  it('if type of arguments is not number, should return 0', () => {
    expect(sum('one', 'two')).toBe(0);
  });
});
