import { defineComponent, SlotsType } from "vue";

import { Config, CreateConfig, FormEngine, Schema } from "@meta-engine/form";
import { Fragment, h, type VNode, PropType, type Component } from "vue";
import Field from "./Field";
interface SlotsConfig {
  default?: any;
}
export default function createFormRender(
  createConfig: CreateConfig<Component>,
) {
  const { layout, layoutItem, components } = createConfig;
  return defineComponent({
    props: {
      fields: {
        type: Array as PropType<Schema["fields"]>,
        required: true,
      },
      config: {
        type: Object as PropType<Config>,
      },
    },

    slots: Object as SlotsType<SlotsConfig>,
    setup(props, { expose, slots }) {
      const { fields, config } = props;

      const f = new FormEngine<VNode, Component>(
        {
          fragment: h(Fragment),
          render: h,
          field: Field,
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

      const children = slots?.default
        ? [f.render(), slots?.default()]
        : [f.render()];
      return () => h(Fragment, children);
    },
  });
}
