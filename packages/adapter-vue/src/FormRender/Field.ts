import { FORCE_UPDATE_KEY, Model } from "@meta-engine/core";
import { defineComponent, onMounted, PropType, ref, VNode } from "vue";

const Field = defineComponent({
  props: {
    model: {
      type: Object as PropType<Model>,
    },
    render: {
      type: Function as PropType<(key: number) => VNode>,
    },
  },
  setup(props, { slots }) {
    const { model, render } = props;

    const _count = ref(0);
    const update = () => _count.value++;

    onMounted(() => {
      model?.register(FORCE_UPDATE_KEY, update);
    });

    return () => render?.(_count.value);
  },
});

export default Field;
