import { defineComponent, Fragment, h, ref } from "vue";

const Field = defineComponent({
  setup(props, { slots }) {
    return () => h(Fragment, {}, slots?.default?.());
  },
});

export default Field;
