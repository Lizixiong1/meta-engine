import { Core } from "@meta-engine/core";
import { Context, Field, RenderOptions, Schema } from "./types";
interface FieldItem extends Record<string, any> {
  children?: FieldItem[];
}
class FormEngine<T> {
  core: Core;
  schema: Schema;
  context: Context;
  renderOptions: RenderOptions<T>;
  // fieldItems: FieldItem[];
  ref: any;
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

  getRef() {
    if (!this.ref) {
      this.ref = {
        instance: this,
      };
    }
    return this.ref;
  }
  render() {
    // return this.renderLayout(this.renderNode(fieldItems));

    return (this.schema.fields || []).map((field) => {
      const type = this.schema.components[field.type];
      return this.renderOptions.render(type.component, { key: field.key });
    });
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
}

export { FormEngine };
