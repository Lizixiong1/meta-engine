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
  layout: h(Form, {
    labelCol: {
      span: 12,
    },
    wrapperCol: {
      span: 12,
    },
  }),
  layoutItem: h(FormItem),
  components: {
    input: h(Input),
    text: h(Input.TextArea),
  },
});

const fields: FormRenderProps["fields"] = [
  {
    type: "input",
    key: "a",
    layout: {
      label: "测试",
    },
  },
  {
    type: "text",
    key: "b",
    layout: {
      label: "测试1",
    },
  },
];

const config: FormRenderProps["config"] = {};
onMounted(() => {
  console.log(formRef.value?.getRef());
});
</script>

<template>
  <FormRender ref="formRef" :fields="fields" :config="config" />
</template>

<style scoped></style>
