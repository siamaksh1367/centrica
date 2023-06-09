import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  sortList<T>(list: T[], key: string, ascending: boolean): T[] {
    return list.sort((a, b) => {
      const valueA = (a as any)[key];
      const valueB = (b as any)[key];
      if (valueA === valueB) {
        return 0;
      }
      if (ascending) {
        return valueA < valueB ? 1 : -1;
      } else if (!ascending) {
        return valueA < valueB ? -1 : 1;
      } else return valueA < valueB ? 1 : -1;
    });
  }
}
