export interface FieldLayout extends Record<string, any> {}
export interface Field {
  type: string;
  key: string;
  title?: string;
  children?: Field[];
  props?: Record<string, any>;
  layout?: FieldLayout;
}

export interface Context {}
export interface Schema {
  // 组件
  components: Record<string, any>;
  // 布局组件
  layout?: any;
  layoutItem?: any;
  // 表单属性
  title?: string;
  description?: string;
  // 字段
  fields?: Field[];
  // 上下文
  context?: Context;

  layoutProps?: Record<string, any>;
  layoutItemProps?: Record<string, any>;
}

export interface RenderOptions<T = any, K = any> {
  render: (...args: any) => T;
  fragment: K;
  field: K
}

export interface Config extends Record<string, any> {}
export interface FormRenderProps extends Pick<Schema, "fields"> {
  config?: Config;
}

export interface FormRef {
  getRef: () => any;
}

export interface CreateConfig<T = any> {
  layout?: T;
  layoutItem?: T;
  components: Record<string, T>;
}
