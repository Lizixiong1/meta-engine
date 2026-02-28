import { useEffect, useRef } from "react";

import {
  createFormRender,
  type FormRef,
  type FormRenderProps,
} from "@meta-engine/adapter-react";
import { Form, Input } from "antd";

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
      label: "测试",
    },
    props: {
      placeholder: "请输入",
    },
  },
];

const FormRender = createFormRender({
  // layout: Form,
  layoutItem: Form.Item,
  components: {
    input: Input,
    text: Input.TextArea,
  },
});
function App() {
  const formRef = useRef<FormRef>(null);

  useEffect(() => {}, []);
  return (
    <>
      <FormRender fields={fields} ref={formRef} />
      <button
        onClick={() => {
          const ref = formRef.current?.getRef();
          if (ref) {
            console.log(ref.instance.core.getValues());
          }
        }}
      >
        结果
      </button>
      <button
        onClick={() => {
          const ref = formRef.current?.getRef();
          if (ref) {
            ref.instance.core.setValues({
              a: "2",
              b: "3",
            });
          }
        }}
      >
        赋值
      </button>
    </>
  );
}

export default App;
