export interface TableModel<T> {
  hasHeader: boolean;
  hasSorting: boolean;
  hasPaging: boolean;
  hasAddNew: boolean;
  headers: string[];
  items: T[];
  serveSidePaging: boolean;
  clientSidePaging: boolean;
}
