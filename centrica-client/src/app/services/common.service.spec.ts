import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    service = new CommonService();
  });

  it('should sort the list in ascending order based on the specified key', () => {
    const list = [
      { id: 3, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    const sortedList = service.sortList(list, 'id', true);

    expect(sortedList).toEqual(
      jasmine.arrayWithExactContents([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'John' },
      ])
    );
  });

  it('should sort the list in descending order based on the specified key', () => {
    const list = [
      { id: 3, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    const sortedList = service.sortList(list, 'id', false);

    expect(sortedList).toEqual(
      jasmine.arrayWithExactContents([
        { id: 3, name: 'John' },
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' },
      ])
    );
  });

  it('should not modify the original list', () => {
    const list = [
      { id: 3, name: 'John' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    const originalList = list.slice();

    service.sortList(list, 'id', true);

    expect(list).toEqual(jasmine.arrayWithExactContents(originalList));
  });
});
