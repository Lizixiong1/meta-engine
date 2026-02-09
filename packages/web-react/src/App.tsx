import { createElement,Fragment, useEffect, useRef } from "react";

import {
  createFormRender,
  type FormRef,
  type FormRenderProps,
} from "@meta-engine/adapter-react";
import { Form, Input } from "antd";

const components: FormRenderProps["components"] = {
  input: Input.TextArea,
};
const fields: FormRenderProps["fields"] = [
  {
    type: "input",
    key: "a",
    layout: {
      label: "测试",
    },
    props: {
      placeholder: '请输入'
    }
  },
];

const FormRender = createFormRender({
  layout: Form,
  layoutItem: Form.Item,
});
function App() {
  const formRef = useRef<FormRef>(null);

  useEffect(() => {
    console.log(formRef.current?.getRef());
  }, []);
  return (
    <>
      <FormRender components={components} fields={fields} ref={formRef} />
    </>
  );
}

export default App;
