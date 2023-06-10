export interface TableModel<T> {
  hasHeader: boolean;
  hasPaging: boolean;
  hasSorting: boolean;
  hasAddNew: boolean;
  items: T[];
}
