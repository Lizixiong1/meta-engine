export interface TableOptions {
  columns?: any[];
  dataSource?: any[];
  rowKey?: string;
  pagination?: any;
}

export interface TableState {
  data: any[];
  loading: boolean;
  pagination: any;
}
