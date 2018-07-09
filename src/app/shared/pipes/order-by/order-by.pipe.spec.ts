import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let orderBy: OrderByPipe;
  const courses1 = [
    { creationDate: new Date('2018-06-21T01:06:24') },
    { creationDate: new Date('2018-07-25T09:59:24') },
    { creationDate: new Date('2018-03-10T09:59:24') },
    { creationDate: new Date('2018-07-25T09:59:23') },
  ];
  const expectedCourses1 = [
    { creationDate: new Date('2018-03-10T09:59:24') },
    { creationDate: new Date('2018-06-21T01:06:24') },
    { creationDate: new Date('2018-07-25T09:59:23') },
    { creationDate: new Date('2018-07-25T09:59:24') },
  ];
  const courses2 = [
    { data: 12 },
    { data: -12 },
    { data: 0 },
    { data: 144 },
  ];
  const expectedCourses2 = [
    { data: -12 },
    { data: 0 },
    { data: 12 },
    { data: 144 },
  ];

  beforeEach(() => {
    orderBy = new OrderByPipe();
  });

  it('create an instance of OrderByPipe', () => {
    expect(orderBy).toBeTruthy();
  });

  it('should correct sort array by prop', () => {
    expect(orderBy.transform(courses1, 'creationDate')).toEqual(expectedCourses1);
    expect(orderBy.transform(courses2, 'data')).toEqual(expectedCourses2);
  });
});



