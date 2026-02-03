import { createElement, useEffect, useRef } from "react";

import {
  FormRender,
  type FormRef,
  type FormRenderProps,
} from "@meta-engine/adapter-react";

const components: FormRenderProps["components"] = {
  a: {
    renderType: 2,
    component: () => createElement("a", {}, 22432),
  },
};
const fields: FormRenderProps["fields"] = [{ type: "a", key: "a" }];

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
