import { Core, FORCE_UPDATE_KEY } from "@meta-engine/core";
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
  render() {
    this.core.clear();
    const Layout = this.schema.layout || this.renderOptions.fragment;
    const props = { ...this.schema.layoutProps };
    const items = this.schema.fields
      ? this.renderLayoutItems(this.schema.fields)
      : [];

    return this.renderOptions.render(Layout, props, items);
  }

  renderLayoutItems(fields: Field[], path?: string[]): T[] {
    return fields.map((field) => {
      const { key, type, props, layout = {}, children } = field;
      const v_component =
        this.schema.components[type] || this.renderOptions.fragment;
      const p = path ? [...path, key] : [key];

      const pathInstance = Core.getPath(p);
      const model = this.core.setModel(pathInstance);
      const child = children?.length
        ? this.renderLayoutItems(children, p)
        : undefined;

      let LayoutItem = this.schema.layoutItem || this.renderOptions.fragment;

      return this.renderOptions.render(this.renderOptions.field, {
        key: pathInstance.key,
        render: () =>
          this.renderOptions.render(
            LayoutItem,
            {
              ...this.schema.layoutItemProps,
              ...layout,
            },
            () =>
              this.renderOptions.render(
                v_component,
                {
                  ...props,
                  value: model.value,
                  onChange: (e) => model.onChange(e?.target?.value || e),
                },
                child,
              ),
          ),
        model,
      });
    });
  }
}

export { FormEngine };
