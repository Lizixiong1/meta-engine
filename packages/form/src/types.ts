export interface Field {}

export interface Context {}
export interface Schema {
  // 表单属性
  title?: string;
  description?: string;
  // 字段
  fields?: Field[];
  // 上下文
  context?: Context;
  // 自定义控件
  customControls?: Record<string, any>;
  // 布局
  layout?: any;
}
