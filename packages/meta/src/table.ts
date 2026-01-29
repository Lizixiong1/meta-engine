export interface TableMeta {
  type: 'table';
  columns: ColumnMeta[];
  dataSource?: any[];
  pagination?: any;
  rowKey?: string;
}

export interface ColumnMeta {
  title: string;
  dataIndex: string;
  key?: string;
  render?: any;
  width?: number | string;
}
