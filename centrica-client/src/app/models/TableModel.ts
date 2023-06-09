export interface TableModel<T> {
  hasHeader: boolean;
  hasPaging: boolean;
  hasSorting: boolean;
  hasAddNew: boolean;
  serveSidePaging: boolean;
  clientSidePaging: boolean;
  items: T[];
}
