<script setup lang="ts">
import {
  FormRender,
  type FormRef,
  type FormRenderProps,
} from "@meta-engine/adapter-vue";
import { h, onMounted, ref } from "vue";
const formRef = ref<FormRef>();
const components: FormRenderProps["components"] = {
  a: {
    renderType: 2,
    component: () => h("a", 22432),
  },
};
const fields: FormRenderProps["fields"] = [{ type: "a", key: "a" }];

onMounted(() => {
  console.log(formRef.value?.getRef());
});
</script>

<template>
  <FormRender :components="components" :fields="fields" ref="formRef" />
</template>

<style scoped></style>
