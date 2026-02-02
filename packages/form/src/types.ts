export interface Field {}

export interface Context {}

export interface ComponentConfig<T = any> {
  //  1 基础元件 无子元素   2 容器元件 允许子元素
  renderType: 1 | 2;
  component: T;
}
export interface Schema {
  // 组件
  components: Record<string, ComponentConfig>;
  // 布局组件
  layoutComponents?: Record<
    string,
    {
      Layout: any;
      LayoutItem: any;
    }
  >;
  // 表单属性
  title?: string;
  description?: string;
  // 字段
  fields?: Field[];
  // 上下文
  context?: Context;
  // 布局渲染类型
  type?: string;
  layoutProps?: Record<string, any>;
  layoutItemProps?: Record<string, any>;
}

export interface RenderOptions<T = any> {
  render: (...args: any) => T;
  fragment: T;
}
