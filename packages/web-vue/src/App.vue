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
  // layout: h(Form),
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
    props: {
      placeholder: "请输入",
    },
  },
  {
    type: "text",
    key: "b",
    layout: {
      label: "测试1",
    },
    props: {
      placeholder: "请输入",
    },
  },
];

const config: FormRenderProps["config"] = {};
onMounted(() => {
  console.log(formRef.value?.getRef());
});

const getV = () => {
  const ref = formRef.value?.getRef()
  if (ref) {
    console.log(ref.instance.core.getValues());
  }
}
const setV = () => {
  const ref = formRef.value?.getRef()
  if (ref) {
    ref.instance.core.setValues({
      a: "2",
      b: "3",
    });
  }
}
</script>

<template>
  <FormRender ref="formRef" :fields="fields" :config="config" />
  <button @click="getV">结果</button>
  <button @click="setV">赋值</button>
</template>

<style scoped></style>
