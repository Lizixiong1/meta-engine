import { FormEngine, FormRef, FormRenderProps } from "@meta-engine/form";
import {
  createElement,
  forwardRef,
  Fragment,
  type ReactNode,
  Ref,
  useImperativeHandle,
  useState,
} from "react";

const FormRender = forwardRef<FormRef, FormRenderProps>((props, ref) => {
  const { fields, components, layoutComponents } = props;
  useImperativeHandle(ref, () => ({
    getRef: () => form.getRef(),
  }));
  const [form] = useState(
    new FormEngine<ReactNode>(
      {
        fragment: createElement(Fragment),
        render: createElement,
      },
      {
        fields,
        components,
        layoutComponents,
      },
    ),
  );
  return form.render();
});

export default FormRender;
