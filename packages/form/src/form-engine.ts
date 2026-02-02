import { Core } from "@meta-engine/core";
import { Context, RenderOptions, Schema } from "./types";

export const getComponentConfig = (
  item: FieldItem,
  customControls?: Record<string, ComponentsMap<any>>,
) => {
  const config = componentsMap.get(item.field.control.type)
    ? componentsMap.get(item.field.control.type)
    : customControls
      ? (Reflect.get(customControls, item.field.control.type) as ComponentsMap)
      : undefined;
  if (config && !config.renderType) {
    config.renderType = 1;
  }
  return config;
};
class FormEngine<T> {
  core: Core;
  schema: Schema;
  context: Context;
  renderOptions: RenderOptions<T>;
  constructor(
    renderOptions: RenderOptions<T>,
    schema: Schema,
    initialContext?: Context,
  ) {
    this.core = new Core();
    this.renderOptions = renderOptions;
    this.schema = schema;
    this.context = initialContext || schema.context || {};
  }

  renderLayoutItem(props?: Record<string, any>, children?: T) {
    let LayoutItem = this.renderOptions.fragment;
    if (this.schema.layoutComponents && this.schema.type) {
      const config = this.schema.layoutComponents[this.schema.type];
      if (config.LayoutItem) {
        LayoutItem = config.LayoutItem;
      }
    }
    return this.renderOptions.render(
      LayoutItem,
      { ...this.schema.layoutItemProps, ...props },
      children,
    );
  }

  renderLayout(children?: T) {
    let Layout = this.renderOptions.fragment;
    if (this.schema.layoutComponents && this.schema.type) {
      const config = this.schema.layoutComponents[this.schema.type];
      if (config.Layout) {
        Layout = config.Layout;
      }
    }
    return this.renderOptions.render(Layout, children);
  }

  renderNode(fieldItems: FieldItem[]): T {
    const components = this.schema.components;
    const extraProps = {
      context: this.context,
    };
    return fieldItems.map((item) => {
      let Com = getComponentConfig(item, components);
      if (!Com) {
        console.warn("该type的组件 未注册 请注册该组件后使用");
        return null;
      }
      return this.renderLayoutItem(
        { ...item.field.layout, key: item.path.key },
        this.renderOptions.render(
          Com.component,
          Object.assign({}, item.props, extraProps),
          Com.renderType === 1
            ? null
            : item.children
              ? this.renderNode(item.children)
              : null,
        ),
      );
    });
  }
  render() {
    return this.renderLayout(this.renderNode(fieldItems));
  }
}

export default FormEngine;
