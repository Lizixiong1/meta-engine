import { defineComponent, getCurrentInstance, ref } from "vue";

import { ComponentConfig, Field, FormEngine, Schema } from "@meta-engine/form";
import { Fragment, h, type VNode, PropType } from "vue";

const Form = defineComponent({
  props: {
    components: {
      type: Object as PropType<Schema["components"]>,
      required: true,
    },
    layoutComponents: {
      type: Object as PropType<Schema["layoutComponents"]>,
      default: () => ({}),
    },
    fields: {
      type: Array as PropType<Schema["fields"]>,
      required: true,
    },
  },
  setup(props, { expose }) {
    const { components, layoutComponents, fields } = props;

    const f = new FormEngine<VNode>(
      {
        fragment: h(Fragment),
        render: h,
      },
      {
        fields,
        components,
        layoutComponents,
      },
    );

    expose({
      getRef: f.getRef.bind(f),
    });
    return f.render.bind(f);
  },
});

export default Form;
