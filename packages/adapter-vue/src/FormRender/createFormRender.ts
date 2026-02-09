import { defineComponent, SlotsType } from "vue";

import { Config, CreateConfig, FormEngine, Schema } from "@meta-engine/form";
import { Fragment, h, type VNode, PropType, type Component } from "vue";

interface ComponentSlots {
  default?: any;
  layout?: any;
  layoutItem?: any;
}
export default function createFormRender(
  createConfig?: CreateConfig<Component>,
) {
  const { layout, layoutItem } = { ...createConfig };
  return defineComponent({
    props: {
      components: {
        type: Object as PropType<Schema["components"]>,
        required: true,
      },
      fields: {
        type: Array as PropType<Schema["fields"]>,
        required: true,
      },
      config: {
        type: Object as PropType<Config>,
      },
    },
    slots: Object as SlotsType<ComponentSlots>,
    setup(props, { expose, slots }) {
      const { components, fields, config } = props;

      const f = new FormEngine<VNode, VNode>(
        {
          fragment: h(Fragment),
          render: h,
        },
        {
          fields,
          components,
          layout,
          layoutItem,
        },
      );

      expose({
        getRef: f.getRef.bind(f),
      });
      return f.render.bind(f, slots.default?.());
    },
  });
}
