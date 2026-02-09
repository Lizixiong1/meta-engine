<script setup lang="ts">
import {
  type FormRef,
  type FormRenderProps,
  createFormRender,
} from "@meta-engine/adapter-vue";
import { Form, FormItem, Input } from "ant-design-vue";
import { h, onMounted, ref } from "vue";
const formRef = ref<FormRef>();

const FormRender = createFormRender({
  layout: Form,
  layoutItem: FormItem,
});
const components: FormRenderProps["components"] = {
  input: Input,
};

const fields: FormRenderProps["fields"] = [
  {
    type: "input",
    key: "a",
    layout: {
      label: "测试",
    },
  },
];

const config: FormRenderProps["config"] = {
  layout: Form,
  layoutItem: FormItem,
};
onMounted(() => {
  console.log(formRef.value?.getRef());
});
</script>

<template>
  <FormRender
    ref="formRef"
    :components="components"
    :fields="fields"
    :config="config"
  >
  </FormRender>
</template>

<style scoped></style>
