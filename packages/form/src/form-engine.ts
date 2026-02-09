import { Core } from "@meta-engine/core";
import { Context, Field, RenderOptions, Schema } from "./types";
interface FieldItem extends Record<string, any> {
  children?: FieldItem[];
}
class FormEngine<T, K> {
  core: Core;
  schema: Schema;
  context: Context;
  renderOptions: RenderOptions<T, K>;
  // fieldItems: FieldItem[];
  ref: any;
  constructor(
    renderOptions: RenderOptions<T, K>,
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
  render(extra?: T[]) {
    this.core.clear();
    const items = this.schema.fields
      ? this.renderLayoutItems(this.schema.fields)
      : [];

    return this.renderOptions.render(this.renderOptions.fragment, {}, [
      ...items,
      extra,
    ]);
  }

  renderLayoutItems(fields: Field[], path?: string[]): T[] {
    return fields.map((field) => {
      const { key, type, props, layout = {}, children } = field;
      const v_component =
        this.schema.components[type] || this.renderOptions.fragment;
      const p = path ? [...path, key] : [key];
      const child = children?.length
        ? this.renderLayoutItems(children, p)
        : undefined;

      const v_node = this.renderOptions.render(v_component, props, child);
      let LayoutItem = this.schema.layoutItem || this.renderOptions.fragment;

      return this.renderOptions.render(
        LayoutItem,
        {
          ...this.schema.layoutItemProps,
          ...layout,
          key: p.join("."),
        },
        () => v_node,
      );
    });
  }

  renderLayout(children?: T | T[]) {
    let Layout = this.schema.layout || this.renderOptions.fragment;

    const props = { ...this.schema.layoutProps };

    return this.renderOptions.render(Layout, props, children);
  }
}

export { FormEngine };
